import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class SignService {

  private apiKey: string = "AIzaSyAA1pil7xuCLJyOPNhabfQohxhXx3mRvLI";
  private signUpUrl: string = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" + this.apiKey;
  private signInUrl: string = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=" + this.apiKey;

  private user: User = new User();

  public log: boolean = false;

  constructor(private http: HttpClient) { }

  createUser(userEmail: String, userPassword: String){
    const authData = {
      email: userEmail,
      password: userPassword,
      returnSecureToken: true
    }

    return this.http.post(this.signUpUrl, authData).pipe(
      map(resp => {
        this.saveToken(resp['idToken']);
        return resp;
      })
    );
  }

  loginUser(userEmail:String, userPassword: String){
    const authData = {
      email: userEmail,
      password: userPassword,
      returnSecureToken: true
    }

    return this.http.post(this.signInUrl, authData).pipe(
      map(resp => {
        this.saveToken(resp['idToken']);
        this.log = true;
        return resp;
      })
    );
  }

  closeSession(){
    console.log("cerrando sesion");
    this.log = false;
    localStorage.removeItem('token');
  }

  saveToken(idToken: string){
    this.user.userToken = idToken;
    localStorage.setItem('token', idToken);
  }

  readToken(){
    if(localStorage.getItem('token')){
      this.user.userToken = localStorage.getItem('token');
    }
    else{
      this.user.userToken = "";
    }
  }

  isLogged(): boolean{
    if(this.user.userToken.length > 2){
      this.log = true;
      return true;
    }
    else{
      this.log = false;
      return false;
    }
  }
}
