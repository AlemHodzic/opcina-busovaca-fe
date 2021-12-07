import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { LoaderService } from 'src/app/loader/loader.service';
import { PostServiceService } from 'src/app/services/post-service.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 4000,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplaySpeed: 1000,
    responsiveRefreshRate: 10,
    responsive: {
      0: {
        items: 1
      }
   
    },
    nav: false
  }
  constructor(private service: PostServiceService, private router: Router, public loaderService: LoaderService ) { }
  allPosts: any[] = [];
  headerPosts: any[] = [];
  news: any[] = [];
  currentLanguage: any;
  ngOnInit(): void {
    this.currentLanguage = localStorage.getItem('language');
    this.service.getPostsWithNoImgs().subscribe(
      res=>{
        this.news = res as []
        if(this.currentLanguage == 'hr'){
          for(let i=0;i<this.news.length; i++){
            this.news[i].title =  this.news[i].titleHR
            this.news[i].subTitle =  this.news[i].subTitleHR
          }
    
        }
      }
    )
    /*this.service.getPosts().subscribe(
      res => {
        this.news = res as [];
      }
    ); */

    this.service.getHeaderPosts().subscribe(
      res=> {
        this.headerPosts = res as [];
      }
    )

  }
  openArticle(id){
    this.router.navigate(['/clanak', id])
  }
}
