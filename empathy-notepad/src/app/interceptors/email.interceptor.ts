import { HttpInterceptorFn } from '@angular/common/http';

export const emailInterceptor: HttpInterceptorFn = (req, next) => {

    const emailHeaderKey = 'X-API-KEY';
    const myEmailAddress = 'smacr25@gmail.com';

      const authReg = req.clone({
          headers: req.headers.set(emailHeaderKey, myEmailAddress)
      });

      return next(authReg);
}