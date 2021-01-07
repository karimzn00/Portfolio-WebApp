import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { AuthService, AuthGuard } from 'src/app/services/auth.service';
import { Location } from '@angular/common';
import {MatDialog} from '@angular/material/dialog';
import { Success } from './success'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  error : any;
  loginForm : FormGroup;
  constructor(public succdial : MatDialog, private authservice : AuthService, private authGuard : AuthGuard, private router : Router) { 
   }
    isAuth = this.authGuard.canActivate() 

  ngOnInit(): void {
    
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }
    success(){
      this.succdial.open(Success)
      setTimeout(() => {
       location.reload();
    }, 2000);
    }

  login(username: string, password: string) {
    this.authservice.login(username, password).subscribe(
      success => this.success(),
      error => this.error = error
    );
  }
 onSubmit() {
    if(this.loginForm.valid) {
      this.login(this.loginForm.get('username').value, this.loginForm.get('password').value)
    }}

}
