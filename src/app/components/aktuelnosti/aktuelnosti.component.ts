import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostServiceService } from 'src/app/services/post-service.service';

@Component({
  selector: 'app-aktuelnosti',
  templateUrl: './aktuelnosti.component.html',
  styleUrls: ['./aktuelnosti.component.css']
})
export class AktuelnostiComponent implements OnInit {

  constructor(private service: PostServiceService, private router: Router) { }
  news: any[] = [];
  ngOnInit(): void {
    this.service.getPosts().subscribe(
      res => {
        this.news = res as [];
        
      }
    ); 
  }

}
