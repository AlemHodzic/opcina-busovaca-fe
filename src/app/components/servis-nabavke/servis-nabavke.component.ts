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
  ngOnInit(): void {
    this.servisService.getServisneInformacijeForMain().subscribe(
      res=> {
        this.servisneInfo = res as [];
      }
    )
  }

}
