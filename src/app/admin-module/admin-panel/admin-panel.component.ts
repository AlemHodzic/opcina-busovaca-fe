import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { PostServiceService } from 'src/app/services/post-service.service';

import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { EditDialogComponent } from '../edit-dialog/edit-dialog.component';
import { ServisServiceService } from 'src/app/services/servis-service.service';
import { AddNovostComponent } from '../add-novost/add-novost.component';
import { AddServisComponent } from '../add-servis/add-servis.component';
import { EditServisComponent } from '../edit-servis/edit-servis.component';
import { AddFotoComponent } from '../add-foto/add-foto.component';
import { GalleryService } from 'src/app/services/gallery.service';
import { AddOglasComponent } from '../add-oglas/add-oglas.component';
import { OglasiService } from 'src/app/services/oglasi.service';


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
  constructor(private oglasService: OglasiService,private photoService: GalleryService, private servisService: ServisServiceService, private service: PostServiceService, public dialog: MatDialog, public auth: AngularFireAuth, private router: Router,  private formBuilder: FormBuilder) {

   }

   searchForm = this.formBuilder.group({
    searchBox: ''
  });
  searchFormServis = this.formBuilder.group({
    searchBox: ''
  });
  searchFormOglas = this.formBuilder.group({
    searchBox: ''
  });
  warning: boolean = false;

  page: number = 1;
  pageServis: number = 1;
  pageGallery: number = 1;
  pageOglas: number = 1;
  loadedOglasi: boolean = false;
  loaded: boolean = false;
  loadedGallery: boolean = false;
  loadedServisneInfo: boolean = false;
  filteredNews: any[] = [];
  servisneInformacije: any[] = [];
  photos: any[] = [];
  oglasi: any[]=[];
  noResult: boolean = false;
  noResultServis: boolean = false;
  noResultGallery: boolean = false;
  noResultOglas: boolean = false;
  uid: any;
  ngOnInit(): void {
    this.auth.user.subscribe(res=>{
      this.uid = res.uid;
    })
    this.service.getPaginatedPosts(this.page).subscribe(
      res=> {
        this.filteredNews = res as [];
        this.loaded = true;
      }
    )
    this.servisService.getServisneInformacije(this.pageServis).subscribe(
      res=> {
        this.servisneInformacije = res as [];
        this.loadedServisneInfo = true;
      }
    )
    this.service.getPosts().subscribe(
      res => {
        this.posts = res as [];
        this.posts.reverse();
      
      }
    );
    this.photoService.getPhotos(this.pageGallery).subscribe(
      res=> {
        this.photos = res as [];
        this.loadedGallery = true;
      }
    )
    this.oglasService.getOglasi(this.pageOglas).subscribe(
      res=>{
        this.oglasi = res as [];
        console.log(this.oglasi)
        this.loadedOglasi = true;
      }
    )
    this.formdata = new FormGroup({
      title: new FormControl(""),
      subTitle: new FormControl(""),
      body:  new FormControl(""),
      tags:  new FormControl(""),
      selectedFile:  new FormControl(""),
      isHeader: new FormControl("")
   });
  }
  addNovost(){
    this.dialog.open(AddNovostComponent)
  }
  addFoto(){
    this.dialog.open(AddFotoComponent)
  }
  addServis(){
    this.dialog.open(AddServisComponent)
  }
  addOglas(){
    this.dialog.open(AddOglasComponent)
  }
  handleUpload(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
        this.uploadedImg = reader.result;
    };
}


  
  deleteItem(id){
    const answer = window.confirm("Jeste li sigurni da zelite izbrisati ovu novost?");
    if(answer){
      this.service.deletePost(id, this.uid);
      setTimeout(() => {
        location.reload();
      }, 500);
    }
 }
 deletePhoto(id){
  const answer = window.confirm("Jeste li sigurni da zelite izbrisati ovu fotografiju iz galerije?");
  if(answer){
    this.photoService.deletePhoto(id);
    setTimeout(() => {
      location.reload();
    }, 500);
  }
}
 deleteServis(id){
  const answer = window.confirm("Jeste li sigurni da zelite izbrisati ovu servisnu informaciju?");
  if(answer){
    this.servisService.deleteServis(id)
  }
 }
 deleteOglas(id){
  const answer = window.confirm("Jeste li sigurni da zelite izbrisati ovaj javni oglas?");
  if(answer){
    this.oglasService.deleteOglas(id)
  }
 }
 editServis(item){
  this.dialog.open(EditServisComponent, {
    data: {
      id: item
    }
  })
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

  previousPageServis(){
    this.noResultServis = false;
    if(this.pageServis <= 1){
      console.log("error")
    }
    else{
      this.loadedServisneInfo = false;
      this.servisneInformacije = [];
      this.pageServis -= 1;
      this.servisService.getServisneInformacije(this.pageServis).subscribe(
        res=> {
          this.servisneInformacije = res as [];
          this.loadedServisneInfo = true;
        }
      )
    }
  }

  nextPageServis(){
    this.noResultServis = false;
    this.pageServis++;
    this.loadedServisneInfo = false;
    this.servisneInformacije = [];
    this.servisService.getServisneInformacije(this.pageServis).subscribe(
      res=> {
        this.servisneInformacije = res as [];
        if(this.servisneInformacije.length == 0){
          this.previousPageServis();
          this.loadedServisneInfo = false;
          alert("Nema rezultata.")
        }else{
          this.loadedServisneInfo = true;
        }
        
      }
    )
  }

  nextPageGallery(){
    this.noResultGallery = false;
    this.pageGallery++;
    this.loadedGallery = false;
    this.photos = [];
    this.photoService.getPhotos(this.pageGallery).subscribe(
      res=> {
        this.photos = res as [];
        if(this.photos.length == 0){
          this.previousPageGallery();
          this.loadedGallery = false;
          alert("Nema rezultata.")
        }else{
          this.loadedGallery = true;
        }
        
      }
    )
  }
  previousPageGallery(){
    this.noResultGallery = false;
    if(this.pageGallery <= 1){
      console.log("error")
    }
    else{
      this.loadedGallery = false;
      this.photos = [];
      this.pageGallery -= 1;
      this.photoService.getPhotos(this.pageGallery).subscribe(
        res=> {
          this.photos = res as [];
          this.loadedGallery = true;
        }
      )
    }
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
  onSubmitServis(){
    this.noResultServis = false;
    if(this.searchFormServis.value.searchBox.length < 4){
      this.warning = true;
    }else{
      this.loaded = false;
      this.filteredNews = [];
      this.warning = false;
      this.servisService.searchByName(this.searchFormServis.value.searchBox).subscribe(
        res=> {
          this.servisneInformacije = res as [];
          if(this.servisneInformacije.length == 0){
            this.noResultServis = true;
          }else{
            this.noResultServis = false;
          }
          this.loadedServisneInfo = true;
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


  onSearchChangeServis(e){
    if(e == ''){
      this.noResultServis = false;
      this.servisneInformacije = [];
      this.loadedServisneInfo = false;
      this.pageServis = 1;
      this.servisService.getServisneInformacije(this.pageServis).subscribe(
        res=> {
          this.servisneInformacije = res as [];
          this.loadedServisneInfo = true;
        }
      )
      }
  }

  onSubmitOglas(){
    this.noResultOglas = false;
    if(this.searchFormOglas.value.searchBox.length < 4){
      this.warning = true;
    }else{
      this.loadedOglasi = false;
      this.oglasi = [];
      this.warning = false;
      this.oglasService.searchByName(this.searchFormOglas.value.searchBox).subscribe(
        res=> {
          console.log(res)
          this.oglasi = res as [];
          if(this.oglasi.length == 0){
            this.noResultOglas = true;
          }else{
            this.noResultOglas = false;
          }
          this.loadedOglasi = true;
        }
      )
    }
  }
  onSearchChangeOglas(e){
    if(e == ''){
      this.noResultOglas = false;
      this.oglasi = [];
      this.loadedOglasi = false;
      this.pageOglas = 1;
      this.oglasService.getOglasi(this.pageServis).subscribe(
        res=> {
          this.oglasi = res as [];
          this.loadedOglasi = true;
        }
      )
      }
  }

  previousPageOglas(){
    this.noResultOglas = false;
    if(this.pageOglas <= 1){
      console.log("error")
    }
    else{
      this.loadedOglasi = false;
      this.oglasi = [];
      this.pageOglas -= 1;
      this.oglasService.getOglasi(this.pageOglas).subscribe(
        res=> {
          this.oglasi = res as [];
          this.loadedOglasi = true;
        }
      )
    }
  }

  nextPageOglas(){
    this.noResultOglas = false;
    this.pageOglas++;
    this.loadedOglasi = false;
    this.oglasi = [];
    this.oglasService.getOglasi(this.pageOglas).subscribe(
      res=> {
        this.oglasi = res as [];
        if(this.oglasi.length == 0){
          this.previousPageOglas();
          this.loadedOglasi = false;
          alert("Nema rezultata.")
        }else{
          this.loadedOglasi = true;
        }
        
      }
    )
  }


}
