import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'

const AUTH = 'http://127.0.0.1/api-auth/';
const http_options = {
	headers : new HttpHeaders({'centent-type':'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http : HttpClient) { }


  login(cred):Observable<any>{
  	return this.http.post(AUTH + 'signin', {
  		username : cred.username,
  		password : cred.password
  	}, http_options);
  }
}
