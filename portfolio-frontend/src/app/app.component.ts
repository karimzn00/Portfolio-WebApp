import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { LoginComponent } from './auth/login/login.component';
import { AuthGuard } from './services/auth.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
	constructor( private auth : AuthGuard, public dialog : MatDialog){}
	isAuth = this.auth.canActivate()
	openDialog(){
		this.dialog.open(LoginComponent)
	}
	if(isAuth){
		this.dialog.closeAll()
	}

  title = 'portfolio-frontend';
  panelOpenState = false;
}
