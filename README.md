# Sparkers

[Your great intro here]

## Getting Started

TO DO

## One step further

### Retry Interceptor

An HTTP interceptor that retries failed HTTP requests, waiting 3 seconds between each retry

```ts
import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { Observable, retry, throwError, timer } from 'rxjs';

export const retryInterceptor: HttpInterceptorFn = (req, next) => {
  const maxRetries = 3;
  const retryableStatusCodes = [500];
  const retryDelay = 3000;
  
  return next(req).pipe(
    retry({
      count: maxRetries,
      delay: (error: HttpErrorResponse, retryCount: number): Observable<number> => {
        if(!retryableStatusCodes.includes(error.status)) {
          return throwError(() => error);
        }

        return timer(retryDelay);
      },
    }),
  );
};
```

### More Unit Tests
You will find more unit tests in this project (components, guards and a service) : https://github.com/RifautAlexis/angular-playground/tree/main