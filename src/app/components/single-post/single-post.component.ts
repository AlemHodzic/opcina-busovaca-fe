import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoaderService } from 'src/app/loader/loader.service';
import { PostServiceService } from 'src/app/services/post-service.service';


@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent implements OnInit {

  constructor(private _Activatedroute:ActivatedRoute, private service: PostServiceService, private router: Router, public loaderService: LoaderService) { }
  id: any;
  slideIndex = 1;
  object: any;
  dateCreated: any;
  currentLanguage: any;
  youtubeLink: string;
  linkExists: boolean = false;
  imgs: any[] = [];
  ngOnInit(): void {
    this.currentLanguage = localStorage.getItem('language');
    this._Activatedroute.paramMap.subscribe(params => { 
      this.id = params.get('id'); 
  });

  this.service.getPost(this.id).subscribe(
    res => {
      this.object = res;
      if(this.object.link){
        this.linkExists = true;
        this.youtubeLink = 'https://www.youtube.com/embed/' + this.object.link
      }
      if(this.currentLanguage == 'hr'){
        this.object.title = this.object.titleHR
        this.object.subTitle = this.object.subTitleHR
        this.object.body = this.object.bodyHR
      }
      for(let i=0; i<this.object.displayFile.length; i++){
        this.imgs.push(this.object.displayFile[i])
      }
      this.showDivs(this.slideIndex);
      this.dateCreated = this.object.createdAt;
      this.dateCreated = this.dateCreated.split('T')[0]
    }
  );


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
