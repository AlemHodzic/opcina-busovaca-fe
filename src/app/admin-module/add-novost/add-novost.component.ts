import { Component, Inject, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormControl, FormGroup } from '@angular/forms';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { PostServiceService } from 'src/app/services/post-service.service';


interface imageObject {
  name: string,
  file: string
}

@Component({
  selector: 'app-add-novost',
  templateUrl: './add-novost.component.html',
  styleUrls: ['./add-novost.component.css']
})
export class AddNovostComponent implements OnInit {

  uploadedImg: any;
  formdata: any;
  post: any;
  uploadedImgs: any[] = [];
  uploadedAttachments: any[] = []
  uid: any;
  constructor(public dialog: MatDialog, @Inject(MAT_DIALOG_DATA) public data: any, private service: PostServiceService, private authService: AngularFireAuth) { }

  ngOnInit(): void {
   this.authService.user.subscribe(res=>{
      this.uid = res.uid;
    })
    this.formdata = new FormGroup({
      title: new FormControl(""),
      subTitle: new FormControl(""),
      body:  new FormControl(""),
      titleHR: new FormControl(""),
      subTitleHR: new FormControl(""),
      bodyHR:  new FormControl(""),
      selectedFile:  new FormControl(""),
      displayFile:  new FormControl(""),
      isHeader: new FormControl(""),
      link: new FormControl(""),
      attachedItems: new FormControl(""),
      oglasLink: new FormControl("")
   });
  }
  closeDialog(){
    this.dialog.closeAll();
  }

  
  handleUploads(event) {

    for (let i = 0; i < event.target.files.length; i++) {
      
      const file = event.target.files[i];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.uploadedImgs.push(reader.result)
        /*let addedImg: imageObject = {name: file.name, file: reader.result as string}
        this.uploadedImg.push(addedImg) */

      };
    }

  }

  handleUpload(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
        this.uploadedImg = reader.result;
    };
  }
  handleAttachment(event) {
    for (let i = 0; i < event.target.files.length; i++) {
      const file = event.target.files[i];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        let addedImg: imageObject = {name: file.name, file: reader.result as string}
        this.uploadedAttachments.push(addedImg)
      };
    }
  }


onClickSubmit(data) { 


  if(data.isHeader){
    data.isHeader = 1;
  }else{
    data.isHeader = 0;
  }
  data.selectedFile = this.uploadedImg;
  data.displayFile = this.uploadedImgs;
  data.attachedItems = this.uploadedAttachments
  data.uid = this.uid;
  this.service.createPost(data)

}

}



