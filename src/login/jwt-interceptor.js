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
      request.headers.common.Authorization = `Bearer EAAHQL2kuNyoBAMnw6LenJAq0Fj1ZChwVmnhesSuMfzmrqTZAaERxU1yExaZAV5ZAPHDwsh8X0eZAFZBft9zXibh9bDoUOjKs116wYmuOYc76ZBdCT5cbSRvsulbUkvLPX7LuPQCikXZCCymQhphrwLUrgZBtNuo9IPeoOEw3On2mNl7KCP7vLR5j5tjovlYQ8sPjZAMcivpqzJmcnH9u44fpPtRfh3btZB7Rjai5MV9bXs0cAZDZD`;
    }*/
    request.headers.common.Authorization = `Bearer EAAHQL2kuNyoBAMnw6LenJAq0Fj1ZChwVmnhesSuMfzmrqTZAaERxU1yExaZAV5ZAPHDwsh8X0eZAFZBft9zXibh9bDoUOjKs116wYmuOYc76ZBdCT5cbSRvsulbUkvLPX7LuPQCikXZCCymQhphrwLUrgZBtNuo9IPeoOEw3On2mNl7KCP7vLR5j5tjovlYQ8sPjZAMcivpqzJmcnH9u44fpPtRfh3btZB7Rjai5MV9bXs0cAZDZD`;
    return request;
  });
}
