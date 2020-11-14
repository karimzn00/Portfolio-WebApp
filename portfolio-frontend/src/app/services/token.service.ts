import { Injectable } from '@angular/core';

const Token_key = 'auth-token';
const User_key = 'auth-user';


@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  signout():void{
  	window.sessionStorage.clear();
  }
	public getToken(): string {
    return sessionStorage.getItem(Token_key);
  }
  public save_token():string{
  	return sessionStorage.getItem(Token_key);
  }

  public saveUser(user):void{
  	window.sessionStorage.removeItem(User_key);
  	window.sessionStorage.setItem(User_key, JSON.stringify(user));
  }

  public getUser():any{
  	return JSON.parse(sessionStorage.getItem(User_key));
  }
}
