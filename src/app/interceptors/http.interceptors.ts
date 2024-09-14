import { HttpHandlerFn, HttpInterceptorFn, HttpRequest } from "@angular/common/http";

export const httpIntercptor: HttpInterceptorFn = (
    req: HttpRequest<any>,
    next: HttpHandlerFn
) => {
    const modifiedRequest = req.clone({
        url: `https://run.mocky.io/v3/${req.url}`
    });
    
    return next(modifiedRequest);
};