// for handling http requests ,, attach headers , token , ...
import {
  HttpEvent,
  HttpRequest,
  HttpInterceptorFn,
  HttpHandlerFn,
  HttpHeaders,
} from '@angular/common/http';
import { Observable } from 'rxjs';
export const HttpInterceptorService: HttpInterceptorFn = (
  req: HttpRequest<any>,
  next: HttpHandlerFn
): Observable<HttpEvent<any>> => {
  let clonedHeaders: any = new HttpHeaders({});

  clonedHeaders = req.clone({
    headers: req.headers.set('Content-Type', 'application/json'),
  });
  return next(clonedHeaders);
};
