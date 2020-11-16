import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isAuth = false;
  error : any;
  loginForm : FormGroup;

  constructor(private authservice : AuthService, private router : Router) { 

     }
    

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }


  login(username: string, password: string) {
    this.authservice.login(username, password).subscribe(
      success => this.router.navigate(['']),
      error => this.error = error
    );
  }
 onSubmit() {
    if(this.loginForm.valid) {
      this.login(this.loginForm.get('username').value, this.loginForm.get('password').value)
    }}

}
