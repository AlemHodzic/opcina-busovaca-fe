import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoaderService } from 'src/app/loader/loader.service';
import { OglasiService } from 'src/app/services/oglasi.service';
@Component({
  selector: 'app-nabavke',
  templateUrl: './nabavke.component.html',
  styleUrls: ['./nabavke.component.scss']
})
export class NabavkeComponent implements OnInit {

  constructor(public service: OglasiService, private _Activatedroute:ActivatedRoute, private router: Router,  private formBuilder: FormBuilder, public loaderService: LoaderService) {}
  searchForm = this.formBuilder.group({
    searchBox: ''
  })
  oglasi: any[] = []
  warning: boolean = false;
  loaded: boolean = false;
  page: number = 1;
  noResult: boolean = false;
  number: number = 1;
  currentLanguage: any;
  ngOnInit(): void {
    this.currentLanguage = localStorage.getItem('language');
    this._Activatedroute.paramMap.subscribe(params => { 
      this.number = +params.get('number'); 
  });
    this.service.getNabavke(this.number).subscribe(
      res=> {
        window.scrollTo(0, 0);
        this.oglasi = res as [];
        if(this.oglasi.length == 0 && this.number != 1){
          this.number = 1;
          this.router.navigate(['/o-opcini/javne-nabavke/page', this.number]).then(()=>{
            window.location.reload()
            
          }
          )

        }
        if(this.currentLanguage == 'hr'){
          for(let i=0;i<this.oglasi.length; i++){
            this.oglasi[i].title =  this.oglasi[i].titleHR
            this.oglasi[i].subTitle =  this.oglasi[i].subTitleHR
          }
    
        }
        /*for(let i=0; i<this.oglasi.length; i++){
          if(this.oglasi[i].title.length > 65){
            this.oglasi[i].title = this.oglasi[i].title.slice(0, 65) + '...';
          }
         
        } */
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
      
      this.router.navigate(['/o-opcini/javne-nabavke/page', this.number]).then(()=>{
        window.location.reload()
        
      }
      )
      
    }
  }

  nextPage(){
    this.number++;
    this.router.navigate(['/o-opcini/javne-nabavke/page', this.number]).then(()=>{
      window.location.reload()
      
    }
    )
  }

}
