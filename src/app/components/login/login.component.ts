import { Component, OnInit } from '@angular/core';
import {SignService } from '../../services/sign.service';
import { Router } from '@angular/router';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: String;
  password: String;
  loggedIn: boolean = false;

  constructor(private authService: SignService,
    private router: Router) { }

  ngOnInit() {
    this.authService.readToken();
    if(this.authService.isLogged()){
      this.router.navigateByUrl('/home');
    }
  }

  login(){
    if(this.checkForm()){
      Swal.fire({
        allowOutsideClick: false,
        icon: 'info',
        text: 'Comprobando...',
      });
      Swal.showLoading();

      this.authService.loginUser(this.email, this.password).subscribe(resp => {
        console.log(resp);
        Swal.close();
        Swal.fire({
          allowOutsideClick: false,
          icon: 'success',
          text: 'Se ha hecho login correctamente'
        });
        this.loggedIn = true;
        this.router.navigateByUrl('/home');
      }, (error) => {
          this.loggedIn = false;
          Swal.close();
          Swal.fire({
            allowOutsideClick: false,
            icon: 'error',
            text: 'No se ha podido hacer login'
          });
      })
    }
  }

  checkForm():boolean{
    if(this.email.match("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$") &&
        this.password.length >= 8){
      return true;
    }
    else{
      return false;
    }
  }
}
