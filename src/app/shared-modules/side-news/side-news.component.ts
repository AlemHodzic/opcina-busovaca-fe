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
  ngOnInit(): void {
    this.service.getPosts().subscribe(
      res => {
        this.news = res as [];
      }
    ); 
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
