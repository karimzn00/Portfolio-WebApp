import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import {DataService } from 'src/app/services/data.service';
import {MatDialog} from '@angular/material/dialog';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { AuthService } from 'src/app/services/auth.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Inject } from '@angular/core';
@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.scss']
})
export class EditProjectComponent implements OnInit {
 target ='projects/'
  editproject : FormGroup;
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
  constructor(private dataserv : DataService,
  	public dialogRef: MatDialogRef<EditProjectComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }
  success : boolean;
  ngOnInit(): void {
  	this.editproject = new FormGroup({
      title: new FormControl(this.data.blog.title, [Validators.required]),
      description: new FormControl(this.data.blog.description, [Validators.required]),
      technology: new FormControl(this.data.blog.technology),
      content: new FormControl(this.data.blog.content, [Validators.required])
    });
  }
 onSubmit() {
      
    console.log(this.editproject.value)
      this.dataserv.update(this.data.blog.id, this.editproject.value, this.target).subscribe(
        Response => {
          console.log('success !')
        },
        error =>{
          console.log(error)
        });
      this.success = this.dataserv.success;
      location.reload();
      this.dataserv.OpenStateProject = true
      
      

   }
}
