import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { OglasiService } from 'src/app/services/oglasi.service';


@Component({
  selector: 'app-add-oglas',
  templateUrl: './add-oglas.component.html',
  styleUrls: ['./add-oglas.component.css']
})
export class AddOglasComponent implements OnInit {

 
  uploadedImg: any;
  formdata: any;
  post: any;
  constructor(public dialog: MatDialog, @Inject(MAT_DIALOG_DATA) public data: any, private service: OglasiService) { }

  ngOnInit(): void {
    this.formdata = new FormGroup({
      title: new FormControl(""),
      body:  new FormControl(""),
      selectedFile:  new FormControl(""),
      type: new FormControl("")
   });
  }
  closeDialog(){
    this.dialog.closeAll();
  }

  handleUpload(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
        this.uploadedImg = reader.result;
    };
  }

onClickSubmit(data) { 
  data.selectedFile = this.uploadedImg; 
  this.service.createOglas(data);
  //this.service.createPost(data)
}

}

