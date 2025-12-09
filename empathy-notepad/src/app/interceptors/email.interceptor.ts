import { HttpInterceptorFn } from '@angular/common/http';

export const emailInterceptor: HttpInterceptorFn = (req, next) => {
      const myEmailAddress = 'smacr25@gmail.com';
      const emailHeaderKey = 'smacr25gmailcom';

      const authReg = req.clone({
          headers: req.headers.set(emailHeaderKey, myEmailAddress)
      });

      return next(authReg);
}