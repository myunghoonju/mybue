import axios from 'axios';
import {accountService} from "@/login/account-service";

export function jwtInterceptor () {
  axios.interceptors.request.use(request => {
    // add auth header with jwt if account is logged in and request is to the api url
/*    const account = accountService.accountValue
    console.log(account)*/
 /*   const isLoggedIn = account.token
    const isApiUrl = request.url.startsWith(process.env.VUE_APP_FACEBOOK_API_URL)
    if (isLoggedIn && isApiUrl) {
      request.headers.common.Authorization = `Bearer `;
    }*/
    request.headers.common.Authorization = `Bearer `;
    return request;
  });
}
