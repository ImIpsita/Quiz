import {
     HttpInterceptor, 
     HttpRequest, 
     HttpHandler,
     HttpEvent,
     HTTP_INTERCEPTORS, 
    } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { LoginService } from "./login.service";

//  const TOKEN_HEADER='Authorization';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private login:LoginService){

    }
    intercept(
        request: HttpRequest<any>, 
        next: HttpHandler
        ): Observable<HttpEvent<any>> {
      
        //add jwt token which is in localstorage
        let authReq=request;
        let token=this.login.getToken();

        console.log('inside authinterceptor')
        console.log(token);
          if(null!==token)
          {
            authReq=authReq.clone({
                setHeaders:{Authorization:`Bearer ${token}`},
                
            });
            console.log(authReq);
          }
          return next.handle(authReq);
    }

  
}

export const authInterceptorProviders=[
    { 
        provide:HTTP_INTERCEPTORS,
        useClass:AuthInterceptor,
        multi:true,

    }

]
