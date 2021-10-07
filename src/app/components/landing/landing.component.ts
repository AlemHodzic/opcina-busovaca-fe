import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
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
    navSpeed: 1500,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplaySpeed: 1000,
    
    responsive: {
      0: {
        items: 1
      }
    },
    nav: false
  }
  constructor(private service: PostServiceService) { }
  allPosts: any[] = [];
  headerPosts: any[] = [];
  news: any[] = [];
  ngOnInit(): void {
    this.service.getPosts().subscribe(
      res => {
        this.allPosts = res as [];
        this.allPosts.reverse();
        this.headerPosts = this.allPosts;
        this.news = this.allPosts;
        this.news.length = 3;
        console.log(this.news)
      }

    ); 
  }

  test(){
    console.log("aaa")
  }

}
