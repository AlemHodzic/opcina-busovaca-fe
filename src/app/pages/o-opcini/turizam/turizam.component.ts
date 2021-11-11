import { Component, OnInit } from '@angular/core';
import {Gallery} from 'angular-gallery';

@Component({
  selector: 'app-turizam',
  templateUrl: './turizam.component.html',
  styleUrls: ['./turizam.component.css']
})
export class TurizamComponent implements OnInit {
  slideIndex = 1;
  constructor(private gallery: Gallery) {}

  ngOnInit(): void {
    this.showDivs(this.slideIndex);
  }
  plusDivs(n) {
    this.showDivs(this.slideIndex += n);
  }
  
   showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides") as HTMLCollectionOf<HTMLElement>;
    if (n > x.length) {this.slideIndex = 1}
    if (n < 1) {this.slideIndex = x.length}
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    x[this.slideIndex-1].style.display = "block";  
  }
  

  showGallery(index: number) {
    let prop = {
        images: [
            {path: '../../../../assets/img/turizam/7.jpg'},
            {path: '../../../../assets/img/turizam/8.jpg'},
            {path: '../../../../assets/img/turizam/2.jpg'},
            {path: '../../../../assets/img/turizam/3.jpg'},
            {path: '../../../../assets/img/turizam/4.jpg'},
            {path: '../../../../assets/img/turizam/5.jpg'},
            {path: '../../../../assets/img/turizam/6.jpg'},
            {path: '../../../../assets/img/turizam/9.jpg'},
            {path: '../../../../assets/img/turizam/10.jpg'}
 
        ],
        index 
    };
    this.gallery.load(prop);
}

}
