import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kultura',
  templateUrl: './kultura.component.html',
  styleUrls: ['./kultura.component.css']
})
export class KulturaComponent implements OnInit {
  slideIndex = 1;
  constructor() { }

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

}
