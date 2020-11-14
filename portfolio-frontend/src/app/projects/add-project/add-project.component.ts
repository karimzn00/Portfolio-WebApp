import { Component, OnInit } from '@angular/core';
import  { ProjectsService } from '../../services/projects.service'
@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.scss']
})
export class AddProjectComponent implements OnInit {
	project = {
		title : '',
		description : '',
		content : '',
    date : '',

	};
	submitted = false;

  constructor(private projserv : ProjectsService) { }

  ngOnInit(): void {
  }

  save(){
  	const proj = {
  		title : this.project.title,
  		description : this.project.description,
  		date : this.project.date
  	};
  	this.projserv.create(proj).subscribe(
  		res => {
  			console.log(res);
  			this.submitted =true;
  		},
  		error => {
  			console.log(error);
  		})
  };

  new(){
  	this.submitted = false;
  	this.project = {
		title : '',
		description : '',
		date : '',
		content : '',
  		
  	}
  }

}
