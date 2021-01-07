import { Component, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.scss']
})
export class BlogDetailComponent implements OnInit {
  constructor( private route : ActivatedRoute, public dialogRef: MatDialogRef<BlogDetailComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }
    currentBlog;
    message = '';
  ngOnInit(): void {

  }
}
