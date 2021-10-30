import { Component, OnInit } from '@angular/core';
import {Gallery} from 'angular-gallery';

@Component({
  selector: 'app-turizam',
  templateUrl: './turizam.component.html',
  styleUrls: ['./turizam.component.css']
})
export class TurizamComponent implements OnInit {

  constructor(private gallery: Gallery) {}

  ngOnInit(): void {
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
