import { Component, OnInit, HostListener, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private document: Document, private router: Router) {}
  test: number = window.innerHeight/9.5;
  toggle = [];
  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (document.body.scrollTop > this.test ||     
    document.documentElement.scrollTop > this.test) {
     this.document.getElementById("navbar")?.classList.add('fixed');
     this.document.getElementById("filler").style.display = "block";
    }else{
      this.document.getElementById("navbar")?.classList.remove('fixed');
      this.document.getElementById("filler").style.display = "none";
    }
  }
  ngOnInit(): void {
  }
  openNav() {
    document.getElementById("mySidebar").style.width = "300px";
  }
  closeNav() {
    document.getElementById("mySidebar").style.width = "0";
  }

}
