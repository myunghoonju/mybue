import { accountService } from "@/login/account-service";

export function authFilter(to, from, next) {
  const account = accountService.accountValue

  if (!account) {
    return next({path: '/login', query: {returnUrl: to.fullPath}})
  }
  next();
}
