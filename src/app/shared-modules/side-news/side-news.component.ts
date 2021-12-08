import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoaderService } from 'src/app/loader/loader.service';
import { PostServiceService } from 'src/app/services/post-service.service';


@Component({
  selector: 'app-side-news',
  templateUrl: './side-news.component.html',
  styleUrls: ['./side-news.component.css']
})

export class SideNewsComponent implements OnInit {
  constructor(private service: PostServiceService, private router: Router, public loaderService: LoaderService) { }
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
        for(let i=0; i<this.news.length; i++){
          if(this.news[i].title.length > 50){
            this.news[i].title = this.news[i].title.slice(0, 50) + '...';
          }
         
        }
      }
    )
  }
  openArticle(id){
    this.router.navigate(['/clanak', id])
    setTimeout(() => {
      window.location.reload();
    }, 100);
  }
  openAll(){
    this.router.navigate(['/aktuelnosti/page/1'])
  }
}
