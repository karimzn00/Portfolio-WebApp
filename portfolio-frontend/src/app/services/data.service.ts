import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from 'src/app/services/auth.service';
const baseURL = 'http://127.0.0.1:8000/'

@Injectable({
  providedIn: 'root'
})
export class DataService {
    
  constructor( private http : HttpClient, private auth : AuthService) { }
  httpOptions = {};
  OpenStateBlog : boolean;
  OpenStateProject : boolean;
  success : boolean;
  getAll(target){
  	return this.http.get(`${baseURL}${target}`);
  }

  get(id, target){
  	return this.http.get(`${baseURL}${target}/${id}/`);
  }

  create(object, target){
    return this.http.post(`${baseURL}${target}`, object);
    this.success = true;
    this.OpenStateBlog = true
    
  }

  update(id, object, target){
  	return this.http.put(`${baseURL}${target}${id}/`, object);
  }

  delete(id, target){
  	return this.http.delete(`${baseURL}${target}${id}/`);
    this.OpenStateBlog = true
  }
  findByTitle(title, target){
  	return this.http.get(`${baseURL}${target}/?title=${title}`);
  }
  deleteAll(target) {
    return this.http.delete(`${baseURL}${target}`);
  }
  
}
