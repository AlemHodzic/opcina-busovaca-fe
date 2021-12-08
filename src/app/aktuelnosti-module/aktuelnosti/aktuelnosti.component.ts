import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PostServiceService } from 'src/app/services/post-service.service';
import { LoaderService } from 'src/app/loader/loader.service';

@Component({
  selector: 'app-aktuelnosti',
  templateUrl: './aktuelnosti.component.html',
  styleUrls: ['./aktuelnosti.component.css']
})
export class AktuelnostiComponent implements OnInit {

  constructor(private _Activatedroute:ActivatedRoute, private service: PostServiceService, private router: Router,  private formBuilder: FormBuilder, public loaderService: LoaderService) { }
  searchForm = this.formBuilder.group({
    searchBox: ''
  });
  warning: boolean = false;

  page: number = 1;
  loaded: boolean = false;
  filteredNews: any[] = [];
  noResult: boolean = false;
  number: number = 1;
  currentLanguage: any;
  ngOnInit(): void {
    this.currentLanguage = localStorage.getItem('language');
    this._Activatedroute.paramMap.subscribe(params => { 
      this.number = +params.get('number'); 
  });
    this.service.getPaginatedPosts(this.number).subscribe(
      res=> {
        window.scrollTo(0, 0);
        this.filteredNews = res as [];
        if(this.filteredNews.length == 0){
          this.number = 1;
          this.router.navigate(['/aktuelnosti/page', this.number]).then(()=>{
            window.location.reload() 
          }
          )
        }
        if(this.currentLanguage == 'hr'){
          for(let i=0;i<this.filteredNews.length; i++){
            this.filteredNews[i].title =  this.filteredNews[i].titleHR
            this.filteredNews[i].subTitle =  this.filteredNews[i].subTitleHR
          }
        }
        for(let i=0; i<this.filteredNews.length; i++){
          if(this.filteredNews[i].title.length > 70){
            this.filteredNews[i].title = this.filteredNews[i].title.slice(0, 70) + '...';
          }
         
        }
   
      }
    )
  }
  previousPage(){
    this.noResult = false;
    if(this.number <= 1){
      console.log("error")
    }
    else{
      this.number -= 1;
      console.log(this.number)
      //this.router.navigateByUrl(`/aktuelnosti/page/${this.number}`);
      
      this.router.navigate(['/aktuelnosti/page', this.number]).then(()=>{
        window.location.reload()
        
      }
      )
      
    }
  }


  nextPage(){
    this.number++;
    this.router.navigate(['/aktuelnosti/page', this.number]).then(()=>{
      window.location.reload()
      
    }
    )

    /*this.service.getPaginatedPosts(this.page).subscribe(
      res=> {
        this.filteredNews = res as [];
        if(this.filteredNews.length == 0){
          this.previousPage();
          this.loaded = false;
          alert("Nema rezultata.")
        }else{
          this.loaded = true;
        }
        
      }
    ) */
  }

  onSubmit(){
    this.noResult = false;
    if(this.searchForm.value.searchBox.length < 4){
      this.warning = true;
    }else{
      this.loaded = false;
      this.filteredNews = [];
      this.warning = false;
      this.service.searchByName(this.searchForm.value.searchBox).subscribe(
        res=> {
          this.filteredNews = res as [];
          for(let i=0; i<this.filteredNews.length; i++){
            if(this.filteredNews[i].title.length > 70){
              this.filteredNews[i].title = this.filteredNews[i].title.slice(0, 70) + '...';
            }
           
          }
          if(this.filteredNews.length == 0){
            this.noResult = true;
          }else{
            this.noResult = false;
          }
          this.loaded = true;
        }
      )
    }
   
  }

  onSearchChange(e){
    if(e == ''){
    this.noResult = false;
    this.filteredNews = [];
    this.loaded = false;
    this.number = 1;
    this.router.navigate(['/aktuelnosti/page', this.number]).then(()=>{
      window.location.reload() 
    })
    }
  }
}
