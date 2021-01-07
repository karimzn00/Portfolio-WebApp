import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import {DataService } from 'src/app/services/data.service';
import {MatDialog} from '@angular/material/dialog';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { AuthService } from 'src/app/services/auth.service';
import { DatePipe } from '@angular/common'
import { BlogListComponent } from '../blog-list/blog-list.component'
@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.scss']
})
export class AddBlogComponent implements OnInit {
  date = new Date();
	addblog : FormGroup;
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
  constructor( private dataserv : DataService, public datepipe: DatePipe) { }
  panelOpenState : boolean;
  success : boolean;
  panelOpenStateBlog;
  ngOnInit(): void {
      let date_ = this.datepipe.transform(this.date, 'yyyy-MM-dd');
  	  this.addblog = new FormGroup({
      title: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      date: new FormControl(date_),
      content: new FormControl('', [Validators.required])
    });

  }

   onSubmit() {
      
    console.log(this.addblog.value)
      this.dataserv.create(this.addblog.value, this.target).subscribe(
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
