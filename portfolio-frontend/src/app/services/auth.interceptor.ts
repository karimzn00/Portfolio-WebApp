import { HTTP_INTERCEPTORS, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';

import { TokenService } from './token.service';
import { Observable } from 'rxjs';

const Token_Header_Key = 'Authorization';

@Injectable()

export class AuthInterceptor implements HttpInterceptor{
	constructor(private token : TokenService){}
	intercept(req : HttpRequest<any>, next : HttpHandler): Observable<HttpEvent<any>>{
		let authReq = req;
		const token = this.token.getToken();
		if (token != null){
			authReq = req.clone({headers : req.headers.set(Token_Header_Key, 'Bearer ' + token) })
		}
		return next.handle(authReq);
	}
}

export const AuthInterceptorproviders = [
	{provide : HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi : true}
	];