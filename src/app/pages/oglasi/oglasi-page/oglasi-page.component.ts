import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoaderService } from 'src/app/loader/loader.service';
import { OglasiService } from 'src/app/services/oglasi.service';

@Component({
  selector: 'app-oglasi-page',
  templateUrl: './oglasi-page.component.html',
  styleUrls: ['./oglasi-page.component.scss']
})
export class OglasiPageComponent implements OnInit {

  constructor(public service: OglasiService, private _Activatedroute:ActivatedRoute, private router: Router,  private formBuilder: FormBuilder, public loaderService: LoaderService) { }
  searchForm = this.formBuilder.group({
    searchBox: ''
  });
  oglasi: any[] = []
  warning: boolean = false;
  loaded: boolean = false;
  page: number = 1;
  noResult: boolean = false;
  number: number = 1;
  currentLanguage: any;
  ngOnInit(): void {
    console.log("...")
    this.currentLanguage = localStorage.getItem('language');
    this._Activatedroute.paramMap.subscribe(params => { 
      this.number = +params.get('number'); 
  });
    this.service.getOglasi(this.number).subscribe(
      res=> {
        
        window.scrollTo(0, 0);
        this.oglasi = res as [];
        if(this.currentLanguage == 'hr'){
          for(let i=0;i<this.oglasi.length; i++){
            this.oglasi[i].title =  this.oglasi[i].titleHR
            this.oglasi[i].subTitle =  this.oglasi[i].subTitleHR
          }
    
        }
        if(this.oglasi.length == 0){
          this.number = 1;
          this.router.navigate(['/javni-oglasi/page', this.number]).then(()=>{
            window.location.reload()
            
          }
          )
        }
        for(let i=0; i<this.oglasi.length; i++){
          if(this.oglasi[i].title.length > 30){
            this.oglasi[i].title = this.oglasi[i].title.slice(0, 30) + '...';
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
      //this.router.navigateByUrl(`/aktuelnosti/page/${this.number}`);
      
      this.router.navigate(['/javni-oglasi/page', this.number]).then(()=>{
        window.location.reload()
        
      }
      )
      
    }
  }


  nextPage(){
    this.number++;
    this.router.navigate(['/javni-oglasi/page', this.number]).then(()=>{
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
      this.oglasi = [];
      this.warning = false;
      this.service.searchByName(this.searchForm.value.searchBox).subscribe(
        res=> {
          this.oglasi = res as [];
          if(this.currentLanguage == 'hr'){
            for(let i=0;i<this.oglasi.length; i++){
              this.oglasi[i].title =  this.oglasi[i].titleHR
              this.oglasi[i].subTitle =  this.oglasi[i].subTitleHR
            }
      
          }
          for(let i=0; i<this.oglasi.length; i++){
            if(this.oglasi[i].title.length > 30){
              this.oglasi[i].title = this.oglasi[i].title.slice(0, 30) + '...';
            }
           
          }
          if(this.oglasi.length == 0){
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
    this.oglasi = [];
    this.loaded = false;
    this.number = 1;
    this.router.navigate(['/javni-oglasi/page', this.number]).then(()=>{
      window.location.reload() 
    })
    }
  }

}
