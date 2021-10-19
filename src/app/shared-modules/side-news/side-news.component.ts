import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostServiceService } from 'src/app/services/post-service.service';


@Component({
  selector: 'app-side-news',
  templateUrl: './side-news.component.html',
  styleUrls: ['./side-news.component.css']
})

export class SideNewsComponent implements OnInit {
  constructor(private service: PostServiceService, private router: Router) { }
  news: any[] = [];
  ngOnInit(): void {
    this.service.getPosts().subscribe(
      res => {
        this.news = res as [];
      }
    ); 
  }
  openArticle(id){
    console.log(id);
    this.router.navigate(['/clanak', id])
    setTimeout(() => {
      window.location.reload();
    }, 100);
  }
  aktuelnosti(){
    console.log("aaaaaa")
  }
}
