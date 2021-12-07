import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ServisServiceService } from 'src/app/services/servis-service.service';

@Component({
  selector: 'app-add-servis',
  templateUrl: './add-servis.component.html',
  styleUrls: ['./add-servis.component.css']
})
export class AddServisComponent implements OnInit {

  uploadedImg: any;
  formdata: any;
  post: any;
  constructor(public dialog: MatDialog, @Inject(MAT_DIALOG_DATA) public data: any, private service: ServisServiceService) { }

  ngOnInit(): void {
    this.formdata = new FormGroup({
      title: new FormControl(""),
      body:  new FormControl(""),
      titleHR: new FormControl(""),
      bodyHR:  new FormControl("")
   });
  }
  closeDialog(){
    this.dialog.closeAll();
  }


onClickSubmit(data) { 
  this.service.createServise(data);
}


}
