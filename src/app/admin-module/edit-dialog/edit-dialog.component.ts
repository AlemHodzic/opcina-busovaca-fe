import { Component, Inject, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
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
  uid: any;
  uploadedImgs: any[];
  constructor(private authService: AngularFireAuth, public dialog: MatDialog, @Inject(MAT_DIALOG_DATA) public data: any, private service: PostServiceService) { }

  ngOnInit(): void {
    this.authService.user.subscribe(res => {
      this.uid = res.uid;
    })
    this.formdata = new FormGroup({
      title: new FormControl(),
      subTitle: new FormControl(),
      body: new FormControl(),
      titleHR: new FormControl(),
      subTitleHR: new FormControl(),
      bodyHR: new FormControl(),
      selectedFile: new FormControl(),
      displayFile: new FormControl(),
      isHeader: new FormControl(),
      link: new FormControl(),
      oglasLink: new FormControl()
    });

    this.service.getPost(this.data.id).subscribe(
      res => {
        this.post = res;
        console.log(this.post.oglasLink)
        this.formdata.get('title').setValue(this.post.title);
        this.formdata.get('subTitle').setValue(this.post.subTitle);
        this.formdata.get('body').setValue(this.post.body);
        this.formdata.get('titleHR').setValue(this.post.titleHR);
        this.formdata.get('subTitleHR').setValue(this.post.subTitleHR);
        this.formdata.get('bodyHR').setValue(this.post.bodyHR);
        this.formdata.get('tags').setValue(this.post.tags);
        this.formdata.get('oglasLink').setValue(this.post.oglasLink);
        this.formdata.get('link').setValue(this.post.link);
      }
    )

  }
  closeDialog() {
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

  onClickSubmit(data) {
    if (data.isHeader) {
      data.isHeader = 1;
    } else {
      data.isHeader = 0;
    }
    if(this.post.oglasLink){
      data.oglasLink = this.post.oglasLink
    }
    if(this.post.link){
      data.link = this.post.link
    }
    data.selectedFile = this.uploadedImg;
    data.displayFile = this.uploadedImgs;
    this.service.updatePost(this.post._id, data, this.uid)

  }

}
