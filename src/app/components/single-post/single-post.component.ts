import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostServiceService } from 'src/app/services/post-service.service';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent implements OnInit {

  constructor(private _Activatedroute:ActivatedRoute, private service: PostServiceService, private router: Router) { }
  id: any;
  object: any;
  news: any[] = [];
  dateCreated: any;
  ngOnInit(): void {
    this._Activatedroute.paramMap.subscribe(params => { 
      this.id = params.get('id'); 
  });

  this.service.getPost(this.id).subscribe(
    res => {
      this.object = res;
      this.dateCreated = this.object.createdAt;
      this.dateCreated = this.dateCreated.split('T')[0]
    }
  );
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

}
