import { BehaviorSubject } from 'rxjs'
import axios from 'axios'
import router from "@/router";

const baseURL= `${process.env.VUE_APP_FACEBOOK_API_URL}/accounts`
const accountSubject = new BehaviorSubject(null);

export const accountService = {
  login,
  logout,
  apiAuthenticate,
  account: accountSubject.asObservable(),
  get accountValue () {
    console.log('accountValue:' + accountSubject.value)
    return accountSubject.value }
}

async function login() {
  // login with facebook then authenticate with the API to get a JWT auth token
  const { authResponse } = await new Promise(FB.login);
  if (!authResponse) return;

  await apiAuthenticate(authResponse.accessToken);

  // get return url from query parameters or default to home page
  const returnUrl = router.history.current.query['returnUrl'] || '/';
  router.push(returnUrl);
}


async function apiAuthenticate(accessToken) {
  const response = await axios.post(`${baseURL}/authenticate`, { accessToken });
  const account = response.data;
  accountSubject.next(account);
  startAuthenticateTimer();
  return account;
}

function logout() {
  // revoke app permissions to logout completely because FB.logout() doesn't remove FB cookie
  FB.api('/me/permissions', 'delete', null, () => FB.logout());
  stopAuthenticateTimer();
  accountSubject.next(null);
  router.push('/login');
}

let authenticateTimeout;

function startAuthenticateTimer() {
  // parse json object from base64 encoded jwt token
  const jwtToken = JSON.parse(atob(accountSubject.value.token.split('.')[1]));

  // set a timeout to re-authenticate with the api one minute before the token expires
  const expires = new Date(jwtToken.exp * 1000);
  const timeout = expires.getTime() - Date.now() - (60 * 1000);
  const { accessToken } = FB.getAuthResponse();
  authenticateTimeout = setTimeout(() => apiAuthenticate(accessToken), timeout);
}

