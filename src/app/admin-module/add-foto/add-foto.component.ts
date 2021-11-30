import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { GalleryService } from 'src/app/services/gallery.service';
import { ServisServiceService } from 'src/app/services/servis-service.service';


@Component({
  selector: 'app-add-foto',
  templateUrl: './add-foto.component.html',
  styleUrls: ['./add-foto.component.css']
})
export class AddFotoComponent implements OnInit {

  uploadedImg: any;
  formdata: any;
  post: any;
  constructor(public dialog: MatDialog, @Inject(MAT_DIALOG_DATA) public data: any, private service: GalleryService) { }

  ngOnInit(): void {
    this.formdata = new FormGroup({
      selectedFile: new FormControl(""),
    });
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

  onClickSubmit(data) {
    data.selectedFile = this.uploadedImg;
    this.service.createPhoto(data);

  }


}
