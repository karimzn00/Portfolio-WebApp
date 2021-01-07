import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import {DataService } from 'src/app/services/data.service';
import {MatDialog} from '@angular/material/dialog';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.scss']
})
export class AddProjectComponent implements OnInit {
  target ='projects/'
  addproject : FormGroup;
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
  constructor(private dataserv : DataService) { }
  panelOpenState : boolean;
  success : boolean;
  panelOpenStateProject;
  ngOnInit(): void {
      this.addproject = new FormGroup({
      title: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      technology: new FormControl(''),
      content: new FormControl('', [Validators.required])
    });

  }

   onSubmit() {
      
    console.log(this.addproject.value)
      this.dataserv.create(this.addproject.value, this.target).subscribe(
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
