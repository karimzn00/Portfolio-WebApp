import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  private baseURL = 'http://127.0.0.1:8000/project/'


  constructor( private http : HttpClient) { }

  getAll(){
  	return this.http.get(this.baseURL);
  }

  get(id){
  	return this.http.get(`$this.baseURL}/${id}/`);
  }

  create(proj){
  	return this.http.post(this.baseURL, proj);
  }

  update(id, proj){
  	return this.http.put(`${this.baseURL}/${id}/`, proj);
  }

  delete(id){
  	return this.http.delete(`${this.baseURL}/${id}/`)
  }
  findByTitle(title){
  	return this.http.get(`${this.baseURL}?title=${title}`);
  }
  
}
