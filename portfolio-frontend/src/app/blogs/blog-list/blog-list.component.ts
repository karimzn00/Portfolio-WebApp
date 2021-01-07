import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import {MatDialog} from '@angular/material/dialog';
import { AddBlogComponent } from '../add-blog/add-blog.component';
import { AuthGuard } from '../../services/auth.service';
import { BlogDetailComponent } from '../blog-detail/blog-detail.component';
import { ActivatedRoute, Router } from '@angular/router';
import { EditBlogComponent } from '../edit-blog/edit-blog.component';

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
  target = 'blogs/';

  constructor( private dataserv : DataService, private authGard : AuthGuard, public dialog : MatDialog) { }
  
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
 
  delete(blog) {
    this.currentBlog = blog;
    this.dataserv.delete(this.currentBlog.id, this.target)
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
  		blog => {
  			this.blogs = blog;
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


  searchTitle(){
  	this.dataserv.findByTitle(this.title, this.target).subscribe(
  		blog => {
  			this.blogs = blog;
  		},
  		error => {
  			console.log(error);
  		}

  		)
  };
    createBlog() {
    this.dialog.open(AddBlogComponent,  {
      height: '600px',
     width: '1000px',
          })
  };
  editBlog(blog){
    this.currentBlog = blog
   this.dialog.open(EditBlogComponent,  {
      height: '600px',
     width: '1000px',
        data : {
          blog : this.currentBlog
        }
          })  }

    content(blog, index){
      this.currentBlog = blog;
      this.currentIndex = index;
      console.log(this.currentBlog)
      this.dialog.open(BlogDetailComponent,  {
       height: '1000px',
       width: '1000px',
        data : {
          blog : this.currentBlog
        }
      }, 
          )
    };

    }