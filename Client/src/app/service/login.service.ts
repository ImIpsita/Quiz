import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

public logicStatusSubject=new Subject<boolean>();

  constructor(private http:HttpClient) { }

//get currentUserDetails
public currentUser(){
   return this.http.get(`${baseUrl}/currentUser`)
}
//generate Token
  public generateToken(loginData:any){
      return this.http.post(`${baseUrl}/generateToken`,loginData);
  }
//set token in localStorage for logged user
   public loginuserToken(token:any){
      localStorage.setItem('token',token);
      //this.logicStatusSubject.next(true);
      return true;
   }
   public getToken(){
      return localStorage.getItem('token');
   }
//check user login or not
   public isLogged(){
      let tokenstr=localStorage.getItem('token');
      if(tokenstr==undefined || tokenstr.trim()==''|| tokenstr==null){
            return false;
          }else{
            return true;
          }
   }
public logout(){
  localStorage.removeItem('token');
   localStorage.removeItem('user')
   
   return true;
}
//set userDetails
public userDetails(user:any){
   localStorage.setItem('user',JSON.stringify(user))
}
public getUser(){
   let userstr=localStorage.getItem('user');
   if(userstr!=null){
      return JSON.parse(userstr);
   }else{
      this.logout();
      return null;
   }
}

public getUserRoles(){
   let user=this.getUser();
   return user.authorities[0].authority;

}

}
