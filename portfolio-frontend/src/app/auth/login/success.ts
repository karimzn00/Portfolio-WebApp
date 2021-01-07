
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'asuccess',
  template: `<div class="success">
  <mat-icon>done</mat-icon> You Logged In successfully ! 
</div>`,
  styleUrls: ['./login.component.scss']
})

export class Success implements OnInit {
	ngOnInit(): void {}

}