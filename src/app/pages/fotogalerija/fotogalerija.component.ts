import { Component, OnInit } from '@angular/core';
import { GalleryService } from 'src/app/services/gallery.service';
import { DomSanitizer } from '@angular/platform-browser';
import {Gallery} from 'angular-gallery';

interface ImgURL {
  path: string
}

@Component({
  selector: 'app-fotogalerija',
  templateUrl: './fotogalerija.component.html',
  styleUrls: ['./fotogalerija.component.css']
})
export class FotogalerijaComponent implements OnInit {

  constructor(public service: GalleryService, private sanitizer: DomSanitizer, private gallery: Gallery) { }
  photos: any[] = [];
  i: number = 0;
  pageGallery: number = 1;
  noResultGallery: boolean = false;
  loadedGallery: boolean = false;
  galleryURLs: any[] = [];
  ngOnInit(): void {
    this.service.getPhotos(this.pageGallery).subscribe(
      res => {
        this.photos = res as [];
        this.loadedGallery = true;
        for(let i=0; i<this.photos.length; i++){
          let imgUrl: ImgURL = {path: this.photos[i].selectedFile}
          this.galleryURLs.push(imgUrl);
        }
      }
    )


  }


  showGallery(index: number) {
    let prop = {
        images: this.galleryURLs,
        index 
    };
    this.gallery.load(prop);
}

  nextPageGallery() {
    this.noResultGallery = false;
    this.pageGallery++;
    this.loadedGallery = false;
    this.photos = [];
    this.service.getPhotos(this.pageGallery).subscribe(
      res => {
        this.photos = res as [];
        if (this.photos.length == 0) {
          this.previousPageGallery();
          this.loadedGallery = false;
          alert("Nema rezultata.")
        } else {
          this.galleryURLs = [];
          this.loadedGallery = true;
          for(let i=0; i<this.photos.length; i++){
            let imgUrl: ImgURL = {path: this.photos[i].selectedFile}
            this.galleryURLs.push(imgUrl);
          }
        }

      }
    )
  }
  previousPageGallery() {
    this.noResultGallery = false;
    if (this.pageGallery <= 1) {
      console.log("error")
    }
    else {
      this.galleryURLs = [];
      this.loadedGallery = false;
      this.photos = [];
      this.pageGallery -= 1;
      this.service.getPhotos(this.pageGallery).subscribe(
        res => {
          this.photos = res as [];
          this.loadedGallery = true;
          for(let i=0; i<this.photos.length; i++){
            let imgUrl: ImgURL = {path: this.photos[i].selectedFile}
            this.galleryURLs.push(imgUrl);
          }
        }
      )
    }
  }


}


