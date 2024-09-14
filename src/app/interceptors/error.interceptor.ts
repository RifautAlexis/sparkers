import { HttpHandlerFn, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, tap, throwError } from 'rxjs';
import { NotificationService } from '../shared/services/notification.service';

export const errorInterceptor: HttpInterceptorFn = (
  req: HttpRequest<any>,
  next: HttpHandlerFn
) => {
  const notification = inject(NotificationService);
  
  return next(req).pipe(
    tap((httpEvent) => {
      // Do nothing if the request was successful
    }),
    catchError((error) => {
      switch (error.status) {
        case 400:
        case 404:
        case 500:
            notification.openError();
            break;
        default:
            notification.openError();
            break;
      }

      throw throwError(() => error);
    })
  );
};
