import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { PostServiceService } from 'src/app/services/post-service.service';

import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { EditDialogComponent } from '../edit-dialog/edit-dialog.component';


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
  constructor(private service: PostServiceService, public dialog: MatDialog, public auth: AngularFireAuth, private router: Router,  private formBuilder: FormBuilder) {

   }

   searchForm = this.formBuilder.group({
    searchBox: ''
  });
  warning: boolean = false;

  page: number = 1;
  loaded: boolean = false;
  filteredNews: any[] = [];
  noResult: boolean = false;
  ngOnInit(): void {
    this.service.getPaginatedPosts(this.page).subscribe(
      res=> {
        this.filteredNews = res as [];
        this.loaded = true;
      }
    )
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
  previousPage(){
    this.noResult = false;
    if(this.page <= 1){
      console.log("error")
    }
    else{
      this.loaded = false;
      this.filteredNews = [];
      this.page -= 1;
      this.service.getPaginatedPosts(this.page).subscribe(
        res=> {
          this.filteredNews = res as [];
          this.loaded = true;
        }
      )
    }
  }

  nextPage(){
    this.noResult = false;
    this.page++;
    this.loaded = false;
    this.filteredNews = [];
    this.service.getPaginatedPosts(this.page).subscribe(
      res=> {
        this.filteredNews = res as [];
        if(this.filteredNews.length == 0){
          this.previousPage();
          this.loaded = false;
          alert("Nema rezultata.")
        }else{
          this.loaded = true;
        }
        
      }
    )
  }

  onSubmit(){
    this.noResult = false;
    if(this.searchForm.value.searchBox.length < 4){
      this.warning = true;
    }else{
      this.loaded = false;
      this.filteredNews = [];
      this.warning = false;
      this.service.searchByName(this.searchForm.value.searchBox).subscribe(
        res=> {
          this.filteredNews = res as [];
          if(this.filteredNews.length == 0){
            this.noResult = true;
          }else{
            this.noResult = false;
          }
          this.loaded = true;
        }
      )
    }
   
  }

  onSearchChange(e){
    if(e == ''){
    this.noResult = false;
    this.filteredNews = [];
    this.loaded = false;
    this.page = 1;
    this.service.getPaginatedPosts(this.page).subscribe(
      res=> {
        this.filteredNews = res as [];
        this.loaded = true;
      }
    )
    }
  }


}
