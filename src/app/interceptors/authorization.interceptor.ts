import { HttpHandlerFn, HttpInterceptorFn, HttpRequest } from "@angular/common/http";

export const authorizationIntercptor: HttpInterceptorFn = (
    req: HttpRequest<any>,
    next: HttpHandlerFn
) => {
    const modifiedRequest = req.clone({
        setHeaders: {
            Authorization: 'Bearer IAmAToken',
        },
    });
    
    return next(modifiedRequest);
};