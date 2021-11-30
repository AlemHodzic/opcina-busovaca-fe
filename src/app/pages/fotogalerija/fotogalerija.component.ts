import { Component, OnInit } from '@angular/core';
import { GalleryService } from 'src/app/services/gallery.service';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-fotogalerija',
  templateUrl: './fotogalerija.component.html',
  styleUrls: ['./fotogalerija.component.css']
})
export class FotogalerijaComponent implements OnInit {

  constructor(public service: GalleryService, private sanitizer: DomSanitizer) { }
  photos: any[] = [];
  pageGallery: number = 1;
  noResultGallery: boolean = false;
  loadedGallery: boolean = false;
  ngOnInit(): void {
    this.service.getPhotos(this.pageGallery).subscribe(
      res => {
        this.photos = res as [];
        this.loadedGallery = true;
      }
    )


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
          this.loadedGallery = true;
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
      this.loadedGallery = false;
      this.photos = [];
      this.pageGallery -= 1;
      this.service.getPhotos(this.pageGallery).subscribe(
        res => {
          this.photos = res as [];
          this.loadedGallery = true;
        }
      )
    }
  }
  imagePath: any;
  openImg(src: any) {

    console.log(src)

  }
}


