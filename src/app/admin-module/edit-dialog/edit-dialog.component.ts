import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { PostServiceService } from 'src/app/services/post-service.service';
@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.css']
})
export class EditDialogComponent implements OnInit {
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
      selectedFile:  new FormControl("")
   });

    this.service.getPost(this.data.id).subscribe(
      res=>{
        this.post = res;
        this.formdata.get('title').setValue(this.post.title);
        this.formdata.get('subTitle').setValue(this.post.subTitle);
        this.formdata.get('body').setValue(this.post.body);
        this.formdata.get('tags').setValue(this.post.tags);
      }
    )
   
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
  console.log(data);
  this.service.updatePost(this.post._id, data)
  //this.service.createPost(data)
}

}
