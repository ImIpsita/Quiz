import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  //add user

  public addUser(user:any){
      //const a=this.http.post(`${baseUrl}/user/`,JSON.stringify(user));
      const a=this.http.post(`${baseUrl}/user/add`,user);
      console.log('inside userService',a);
      return a;
    // return this.http.post(`${baseUrl}/user/add`,user);
  }
}
