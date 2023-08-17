import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error instanceof HttpErrorResponse && error.status === 401) {  // 401 is the status code for unauthorized requests
          // handle authorization errors
          // in this case I assume you want to redirect to some kind of login page
          sessionStorage.removeItem("access_token");
          window.location.href = "/login";
        }
        // if not an auth error, just pass it to the next handler
        return throwError(error);
      })
    );
  }
}