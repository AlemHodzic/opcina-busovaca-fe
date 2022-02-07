import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoaderService } from 'src/app/loader/loader.service';
import { OglasiService } from 'src/app/services/oglasi.service';
import { saveAs } from 'file-saver';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-single-oglas',
  templateUrl: './single-oglas.component.html',
  styleUrls: ['./single-oglas.component.css']
})
export class SingleOglasComponent implements OnInit {
  constructor(private _Activatedroute:ActivatedRoute, private service: OglasiService, private router: Router, public loaderService: LoaderService, private meta: Meta, private titleService: Title) { }
  single: any;
  id: any;
  currentLanguage: any;
  ngOnInit(): void {
    this.currentLanguage = localStorage.getItem('language');
    this._Activatedroute.paramMap.subscribe(params => { 
      this.id = params.get('id'); 
  });
  this.service.getOglas(this.id).subscribe(
    res=> {
      this.single = res;
      if(this.currentLanguage == 'hr'){
          this.single.title =  this.single.titleHR
          this.single.subTitle =  this.single.subTitleHR
          this.single.body =  this.single.bodyHR
      }
      this.titleService.setTitle(this.single.title)
    }
  )


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