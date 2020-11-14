import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../../services/projects.service'
@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {
	project : any;
	currentProject = null;
	currentIndex = -1;
	title = '';


  constructor(private projserv : ProjectsService) { }

  ngOnInit(): void {
  	this.retreive();
  }
  retreive(){
  	this.projserv.getAll().subscribe( 
  		proj => {
  			this.project = proj;
  			console.log(proj);
  		},
  		error => {
  			console.log(error);
  		});
  };

  refresh(){
  	this.retreive();
  	this.currentProject = null;
  	this.currentIndex = -1; 
  };

  setActive(project, index){
  	this.currentProject = project;
  	this.currentIndex = index;
  };

  searchTitle(){
  	this.projserv.findByTitle(this.title).subscribe(
  		proj => {
  			this.project = proj;
  			console.log(proj);
  		},
  		error => {
  			console.log(error);
  		}

  		)
  }

}
