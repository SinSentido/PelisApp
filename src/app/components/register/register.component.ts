import { Component, OnInit } from '@angular/core';
import {SignService } from '../../services/sign.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    email: String;
    password: String;

    constructor(private authService: SignService) { }

    ngOnInit() {
    }

    register(){
      if(this.checkForm()){
        Swal.fire({
          allowOutsideClick: false,
          icon: 'info',
          text: 'Creating your user',
        });
        Swal.showLoading();

        this.authService.createUser(this.email, this.password).subscribe(resp => {
          console.log(resp);
          Swal.close();
          Swal.fire({
            allowOutsideClick: false,
            icon: 'success',
            text: 'User created succesfully'
          });
        }, (error) => {
          console.log(error);
          Swal.close();
          Swal.fire({
            allowOutsideClick: false,
            icon: 'error',
            text: 'Email already in use'
          });
        });
      }
    }

    checkForm(): boolean{
      if(this.email.match("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$") &&
        this.password.length >= 8){
          return true;
      }
      else{
        return false;
      }
    }

}
