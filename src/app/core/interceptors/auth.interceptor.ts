import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment.development';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  private readonly token: string = env.token;

  // constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let cloneRequest = request;

    // verificar si el token existe en los environment o donde se haya guardado el token
    if(this.token){
      cloneRequest = request.clone({
        setHeaders: {
          accept: 'application/json',
          Authorization: `Bearer ${this.token}` // obten tu token en https://developer.themoviedb.org/
        },
        setParams: {
          language: 'en-US'
        }
      });
    }
    return next.handle(cloneRequest);
  }
  
}
