import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoaderService } from 'src/app/loader/loader.service';
import { PostServiceService } from 'src/app/services/post-service.service';
import { saveAs } from 'file-saver';
import { Meta, Title } from '@angular/platform-browser';  

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent implements OnInit {

  constructor(private _Activatedroute:ActivatedRoute, private service: PostServiceService, private router: Router, public loaderService: LoaderService, private meta: Meta, private titleService: Title) { }
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
      this.titleService.setTitle(this.object.title)
      if(this.object.link){
        this.linkExists = true;
        this.youtubeLink = 'https://www.youtube.com/embed/' + this.object.link
      }
      if(this.currentLanguage == 'hr'){
        this.object.title = this.object.titleHR
        this.object.subTitle = this.object.subTitleHR
        this.object.body = this.object.bodyHR
        this.titleService.setTitle(this.object.titleHR)
      }
      for(let i=0; i<this.object.displayFile.length; i++){
        this.imgs.push(this.object.displayFile[i])
      }
      this.showDivs(this.slideIndex);
      this.dateCreated = this.object.createdAt;
      this.dateCreated = this.dateCreated.split('T')[0]
      const description = this.object.body.slice(0, 120) + '...'
      this.meta.addTags([
        { property: 'og:title', content: this.object.title },
        { property: 'og:type', content: 'article' },
        { property: 'og:description', content: description },
        { property: 'og:image', content: this.object.selectedFile }   
      ]); 

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
  downloadBase64Data = (base64String, fileName) => {
    let file = this.convertBase64ToFile(base64String, fileName);
    saveAs(file, fileName);
}
   convertBase64ToFile = (base64String, fileName) => {
    let arr = base64String.split(',');
    let mime = arr[0].match(/:(.*?);/)[1];
    let bstr = atob(arr[1]);
    let n = bstr.length;
    let uint8Array = new Uint8Array(n);
    while (n--) {
       uint8Array[n] = bstr.charCodeAt(n);
    }
    let file = new File([uint8Array], fileName, { type: mime });
    return file;
}
}
