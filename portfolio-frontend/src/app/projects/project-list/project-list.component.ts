import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import {MatDialog} from '@angular/material/dialog';
import { AddProjectComponent } from '../add-project/add-project.component';
import { AuthGuard } from '../../services/auth.service';
import { ProjectDetailsComponent } from '../project-details/project-details.component';
import { ActivatedRoute, Router } from '@angular/router';
import { EditProjectComponent } from '../edit-project/edit-project.component';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {
	projects : any;
	currentProj = null;
	currentIndex = -1;
	title = '';
  target = 'projects/';

  constructor(private dataserv : DataService, private authGard : AuthGuard, public dialog : MatDialog) { }
  isAuth = this.authGard.canActivate();

ngOnInit(): void {
    this.retreive();
  }
  
  deleteall(){
    this.dataserv.deleteAll(this.target).subscribe(
    response => {
      console.log(response);
      this.ngOnInit()
    },);
  };
 
  delete(proj) {
    this.currentProj = proj;
    this.dataserv.delete(this.currentProj.id, this.target)
    .subscribe(
    response => {
      console.log(response);
      this.ngOnInit()
    },
    error => {
      console.log(error);
    });
    this.refresh()
  }
  retreive(){
    this.dataserv.getAll(this.target).subscribe( 
      proj => {
        this.projects = proj;
      },
      error => {
        console.log(error);
      });
  };

  refresh(){
    this.retreive();
    this.currentProj = null;
    this.currentIndex = -1; 
  };


  searchTitle(){
    this.dataserv.findByTitle(this.title, this.target).subscribe(
      proj => {
        this.projects = proj;
      },
      error => {
        console.log(error);
      }

      )
  };
    createProj() {
    this.dialog.open(AddProjectComponent,  {
      height: '600px',
     width: '1000px',
          })
  };
  editBlog(proj){
    this.currentProj = proj
   this.dialog.open(EditProjectComponent,  {
      height: '600px',
     width: '1000px',
        data : {
          blog : this.currentProj
        }
          })  }

    content(proj, index){
      this.currentProj = proj;
      this.currentIndex = index;
      this.dialog.open(ProjectDetailsComponent,  {
       height: '1000px',
       width: '1000px',
        data : {
          project : this.currentProj
        }
      }, 
          )
    };

    }