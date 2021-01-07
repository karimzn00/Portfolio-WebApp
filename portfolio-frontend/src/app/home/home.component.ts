import { Component, OnInit, Input } from '@angular/core';
import { LoginComponent } from '../auth/login/login.component';
import { AuthService, AuthInterceptor, AuthGuard } from '../services/auth.service';
import { Location } from '@angular/common';
import {MatDialog} from '@angular/material/dialog';
import { DataService } from '../services/data.service';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { MatSidenav } from '@angular/material/sidenav'; 


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
	  @Input() drawer : MatSidenav;
	languages = [
		{
			name : 'English',
		 	level : 'Fluent'
		 },
		 {
			name : 'French',
		 	level : 'Fluent'
		 },
		 {
			name : 'Arabic',
		 	level : 'Fluent'
		 },
		 {
			name : 'Amazigh',
		 	level : 'Fluent'
		 },
		 {
			name : 'Hebrew',
		 	level : 'Basics'
		 },

	];
	skills = [
		{
			skill : 'Machine Learning',
		 	level : 'Intermidiae'
		 },
		 {
			skill : 'Deep Learning',
		 	level : 'Intermidiae'
		 },
		 {
			skill : 'Web Developement',
		 	level : 'Expert'
		 },
		 {
			skill : 'Python',
		 	level : 'Expert'
		 },
		 {
			skill : 'Javascript',
		 	level : 'Intermidiae'
		 },

	];
	panelOpenState;
	OpenStateBlog:boolean;
	
  constructor(private dataserv : DataService, private auth : AuthService, private authGard : AuthGuard, public dialog : MatDialog) {  }
	isAuth = this.authGard.canActivate();

  ngOnInit(): void {
  	this.OpenStateBlog = this.dataserv.OpenStateBlog;


}
	openDialog(){
		this.dialog.open(LoginComponent)
	};
	closeDialog(){
		
		this.dialog.closeAll()
	}

	logout(){
		this.auth.logout();
		location.reload();
	};

	


}
