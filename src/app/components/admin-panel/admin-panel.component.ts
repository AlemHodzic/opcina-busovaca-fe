import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { PostServiceService } from 'src/app/services/post-service.service';
import { EditDialogComponent } from '../edit-dialog/edit-dialog.component';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AngularFireAuth } from '@angular/fire/compat/auth';


@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {
  uploadedImg: any;
  formdata: any;
  posts: any[] = [];
  object: {
    title: String,
    subTitle: String,
    body: String,
    tags: [String],
    selectedFile: String,
  }
  constructor(private service: PostServiceService, public dialog: MatDialog, public auth: AngularFireAuth) {

   }

  ngOnInit(): void {
    this.service.getPosts().subscribe(
      res => {
        this.posts = res as [];
        this.posts.reverse();
        //console.log(this.posts);
      }
    );



    /*this.service.getPost("615056101c0f4007ea810b3d").subscribe(
      res => {
        console.log(res);
      }
    );
    */

    this.formdata = new FormGroup({
      title: new FormControl(""),
      subTitle: new FormControl(""),
      body:  new FormControl(""),
      tags:  new FormControl(""),
      selectedFile:  new FormControl(""),
      isHeader: new FormControl("")
   });
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
    if(data.isHeader){
      data.isHeader = 1;
    }else{
      data.isHeader = 0;
    }
    this.service.createPost(data)
 }
  
  deleteItem(id){
    console.log(id);
    const answer = window.confirm("Jeste li sigurni da zelite izbrisati ovu novost?");
    if(answer){
      this.service.deletePost(id);
      setTimeout(() => {
        location.reload();
      }, 500);
    }
   
 }

 openDialog(item){
  this.dialog.open(EditDialogComponent, {
    data: {
      id: item
    }
  })
  }


}
