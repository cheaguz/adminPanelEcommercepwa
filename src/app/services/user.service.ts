import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {BehaviorSubject} from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class UserService {
authenticationState = new BehaviorSubject((localStorage.getItem("token")?true:false));

  constructor(private http:HttpClient) {}

  login(data){
    return this.http.post("http://localhost:3000/admin/login", data)
  }
  authenticate(token:string,usuarioId:string){
    localStorage.setItem("token",token);
   this.authenticationState.next(true)
 }

 isAuthenticate(){
   return this.authenticationState
 }

 isAuthenticated(){
   return this.authenticationState.value;
 }
 logOut(){
  localStorage.removeItem("token");
  this.authenticationState.next(false)
  
}
}
