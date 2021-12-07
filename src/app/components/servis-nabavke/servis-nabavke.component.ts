import { Component, OnInit } from '@angular/core';
import { ServisServiceService } from 'src/app/services/servis-service.service';

@Component({
  selector: 'app-servis-nabavke',
  templateUrl: './servis-nabavke.component.html',
  styleUrls: ['./servis-nabavke.component.scss']
})
export class ServisNabavkeComponent implements OnInit {

  constructor(public servisService: ServisServiceService) { }
  servisneInfo: any[] = [];
  currentLanguage: any;
  ngOnInit(): void {
    this.currentLanguage = localStorage.getItem('language');
    this.servisService.getServisneInformacijeForMain().subscribe(
      res=> {
        this.servisneInfo = res as [];
        if(this.currentLanguage == 'hr'){
          for(let i=0;i<this.servisneInfo.length; i++){
            this.servisneInfo[i].title =  this.servisneInfo[i].titleHR
          }
    
        }
      }
    )
  }

}
