import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import jwt_decode from "jwt-decode";



@Injectable({
  providedIn: 'root'
})

export class LoginService {
  
  constructor( ) {}
  login(user, password) {
    if(user == "admin" && password == "admin"){
      localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEyMzQ1Njc4OTAiLCJuYW1lIjoiSm9lIFNhbSJ9.RpYD7qsSX8UvhHeBarSe67yJo-OXU2UNtIvmme0u2vo');
      let decoded = jwt_decode('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEyMzQ1Njc4OTAiLCJuYW1lIjoiSm9lIFNhbSJ9.RpYD7qsSX8UvhHeBarSe67yJo-OXU2UNtIvmme0u2vo');
      localStorage.setItem('name', decoded['name'])

      return true
    }
    else{
      return false
    }

  

  }


  //Erros
  handleError(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      //client-side
      errorMessage = error.error.message;
    } 
    else {
       //server-side
      errorMessage = `Código do erro: ${error.status}\nMensagem: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
