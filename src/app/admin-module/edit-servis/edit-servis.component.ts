import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ServisServiceService } from 'src/app/services/servis-service.service';


@Component({
  selector: 'app-edit-servis',
  templateUrl: './edit-servis.component.html',
  styleUrls: ['./edit-servis.component.css']
})
export class EditServisComponent implements OnInit {

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
   this.service.getServis(this.data.id).subscribe(
    res=>{
      this.post = res;
      this.formdata.get('title').setValue(this.post.title);
      this.formdata.get('body').setValue(this.post.body);
      this.formdata.get('titleHR').setValue(this.post.titleHR);
      this.formdata.get('bodyHR').setValue(this.post.bodyHR);
    }
  )
  }
  closeDialog(){
    this.dialog.closeAll();
  }


onClickSubmit(data) { 
  this.service.updateServis(this.post._id, data)
}

}
