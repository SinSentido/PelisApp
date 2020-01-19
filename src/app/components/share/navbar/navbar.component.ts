import { Component, OnInit } from '@angular/core';
import {SignService} from '../../../services/sign.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private signService: SignService,
    private router: Router) { }

  ngOnInit() {
  }

  closeSession(){
    this.signService.closeSession();
    this.router.navigateByUrl("/login");
  }

}
