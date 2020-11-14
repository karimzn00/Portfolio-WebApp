import { Component, OnInit } from '@angular/core';
import { BlogsService } from '../../services/blogs.service'

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {
	blogs : any;
	currentBlog = null;
	currentIndex = -1;
	title = '';


  constructor(private projserv : BlogsService) { }

  ngOnInit(): void {
  	this.retreive();
  }
  retreive(){
  	this.projserv.getAll().subscribe( 
  		proj => {
  			this.blogs = proj;
  			console.log(proj);
  		},
  		error => {
  			console.log(error);
  		});
  };

  refresh(){
  	this.retreive();
  	this.currentBlog = null;
  	this.currentIndex = -1; 
  };

  setActive(project, index){
  	this.currentBlog = project;
  	this.currentIndex = index;
  };

  searchTitle(){
  	this.projserv.findByTitle(this.title).subscribe(
  		proj => {
  			this.blogs = proj;
  			console.log(proj);
  		},
  		error => {
  			console.log(error);
  		}

  		)
  }
    }