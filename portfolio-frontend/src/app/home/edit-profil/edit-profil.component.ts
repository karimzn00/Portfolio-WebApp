import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import {MatChipInputEvent} from '@angular/material/chips';
import {COMMA, ENTER} from '@angular/cdk/keycodes';

export interface Language{
	name : string;
};
export interface Skill{
	name : string;
}


@Component({
  selector: 'app-edit-profil',
  templateUrl: './edit-profil.component.html',
  styleUrls: ['./edit-profil.component.scss']
})
export class EditProfilComponent implements OnInit {
	visible = true;
	readonly separatorKeysCodes : number[] = [ENTER, COMMA];
	languages : Language[];
	skills : Skill[];
	my_profil : FormGroup;
	outputImage: string;
	target = 'MyProfil/';
	selectable = true;
	removable = true;
	addOnBlur = true;
  constructor(private dataserv : DataService) { }

  ngOnInit(): void {
  		this.my_profil = new FormGroup({
		biog : new FormControl('', ),
		quote : new FormControl('', ),
		img: new FormControl('', ),
		email : new FormControl('', ),
		country : new FormControl('', ),
		job : new FormControl('', ),
		linkdin : new FormControl('', ),
		twitter : new FormControl('', ),
		github : new FormControl('', ),	
		instagram : new FormControl('', ),
		language: new FormControl('', ),
		skill: new FormControl('', ),
	});
  }


  	save_profil(){
		this.dataserv.create(this.my_profil.value, this.target).subscribe(
        Response => {
          console.log('success !')
        },
        error =>{
          console.log(error)
        });
	};

	image_change_event(file:any){
		const reader = new FileReader();
		reader.onload = (e : any) => {
			const img = new Image();
			img.src = e.target.result;
			img.onload = rs => {
				const img_height = rs.currentTarget['height'];
				const img_width = rs.currentTarget['width'];
				console.log(img_height, img );
				const imgBase64Path = e.target.result;
				this.outputImage = imgBase64Path;

			}
		}
		reader.readAsDataURL(file.target.files[0])
	};
	add(event : MatChipInputEvent, object):void{
		const input = event.input;
		const value = event.value;
		if((value || '').trim()){
			object.push({name : value.trim()});
		}
		if(input){
			input.value  = '';
		}
	}
	remove(object : Object, objects):void{
		const index = objects.indexOf(object);
		if(index >= 0){
			objects.splice(index, 1);
		}
	}
}
