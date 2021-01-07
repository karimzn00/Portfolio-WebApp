import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import {DataService } from 'src/app/services/data.service';
import {MatDialog} from '@angular/material/dialog';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { AuthService } from 'src/app/services/auth.service';
import { DatePipe } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Inject } from '@angular/core';
@Component({
  selector: 'app-edit-blog',
  templateUrl: './edit-blog.component.html',
  styleUrls: ['./edit-blog.component.scss']
})
export class EditBlogComponent implements OnInit {
  date = new Date();
	editblog : FormGroup;
  target ='blogs/';
  editorConfig: AngularEditorConfig = {
    editable: true,
      spellcheck: true,
      height: 'auto',
      minHeight: '0',
      maxHeight: 'auto',
      width: 'auto',
      minWidth: '0',
      translate: 'yes',
      enableToolbar: true,
      showToolbar: true,
      placeholder: 'Enter text here...',
      defaultParagraphSeparator: '',
      defaultFontName: '',
      defaultFontSize: '',
      fonts: [
        {class: 'arial', name: 'Arial'},
        {class: 'times-new-roman', name: 'Times New Roman'},
        {class: 'calibri', name: 'Calibri'},
        {class: 'comic-sans-ms', name: 'Comic Sans MS'}
      ],
      customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ],
    uploadUrl: 'v1/image',
    uploadWithCredentials: false,
    sanitize: true,
    toolbarPosition: 'top',
    toolbarHiddenButtons: [
      ['bold', 'italic'],
      ['fontSize']
    ]
};
  constructor( private dataserv : DataService, public datepipe: DatePipe,
  	public dialogRef: MatDialogRef<EditBlogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }
	success : boolean;
  ngOnInit(): void {
  		this.editblog = new FormGroup({
      title: new FormControl(this.data.blog.title, [Validators.required]),
      description: new FormControl(this.data.blog.description, [Validators.required]),
      date: new FormControl(this.data.blog.date),
      content: new FormControl(this.data.blog.content, [Validators.required])
    });
  }
     onSubmit() {
      this.dataserv.update(this.data.blog.id, this.editblog.value, this.target).subscribe(
        Response => {
          console.log('success !')
        },
        error =>{
          console.log(error)
        });
      this.success = this.dataserv.success;
      location.reload();
      this.dataserv.OpenStateBlog = true
      
      

   }
}
