import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { PostServiceService } from 'src/app/services/post-service.service';

@Component({
  selector: 'app-add-novost',
  templateUrl: './add-novost.component.html',
  styleUrls: ['./add-novost.component.css']
})
export class AddNovostComponent implements OnInit {

  uploadedImg: any;
  formdata: any;
  post: any;
  constructor(public dialog: MatDialog, @Inject(MAT_DIALOG_DATA) public data: any, private service: PostServiceService) { }

  ngOnInit(): void {
    this.formdata = new FormGroup({
      title: new FormControl(""),
      subTitle: new FormControl(""),
      body:  new FormControl(""),
      tags:  new FormControl(""),
      selectedFile:  new FormControl(""),
      isHeader: new FormControl("")
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
  if(data.isHeader){
    data.isHeader = 1;
  }else{
    data.isHeader = 0;
  }
  data.selectedFile = this.uploadedImg; 
  this.service.createPost(data)
}

}



