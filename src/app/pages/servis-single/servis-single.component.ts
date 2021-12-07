import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoaderService } from 'src/app/loader/loader.service';
import { ServisServiceService } from 'src/app/services/servis-service.service';

@Component({
  selector: 'app-servis-single',
  templateUrl: './servis-single.component.html',
  styleUrls: ['./servis-single.component.css']
})
export class ServisSingleComponent implements OnInit {

  constructor(private _Activatedroute:ActivatedRoute, private service: ServisServiceService, private router: Router, public loaderService: LoaderService) { }
  single: any;
  id: any;
  currentLanguage: any;
  ngOnInit(): void {
    this.currentLanguage = localStorage.getItem('language');
    this._Activatedroute.paramMap.subscribe(params => { 
      this.id = params.get('id'); 
  });
  this.service.getServis(this.id).subscribe(
    res=> {
      this.single = res;
      if(this.currentLanguage == 'hr'){
        this.single.title =  this.single.titleHR
        this.single.body =  this.single.bodyHR

    }
    }
  )

  }

}
