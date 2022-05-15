import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { OglasiService } from 'src/app/services/oglasi.service';

interface imageObject {
  name: string,
  file: string
}

@Component({
  selector: 'app-add-oglas',
  templateUrl: './add-oglas.component.html',
  styleUrls: ['./add-oglas.component.css']
})

export class AddOglasComponent implements OnInit {


  uploadedImg: any[] = [];
  formdata: any;
  post: any;
  uploadedImgs: any[] = [];
  constructor(public dialog: MatDialog, @Inject(MAT_DIALOG_DATA) public data: any, private service: OglasiService) { }

  ngOnInit(): void {
    this.formdata = new FormGroup({
      title: new FormControl(""),
      body: new FormControl(""),
      titleHR: new FormControl(""),
      bodyHR: new FormControl(""),
      selectedFile: new FormControl(""),
      type: new FormControl(""),
      createdAt: new FormControl("")
    });
  }
  closeDialog() {
    this.dialog.closeAll();
  }

  handleUpload(event) {
    for (let i = 0; i < event.target.files.length; i++) {
      const file = event.target.files[i];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        let addedImg: imageObject = {name: file.name, file: reader.result as string}
        this.uploadedImg.push(addedImg)
      };
    }
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
    data.selectedFile = this.uploadedImg;
    data.displayFile = this.uploadedImgs;
    this.service.createOglas(data);
  }

}

