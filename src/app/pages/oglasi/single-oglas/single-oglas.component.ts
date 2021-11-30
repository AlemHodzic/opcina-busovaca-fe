import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoaderService } from 'src/app/loader/loader.service';
import { OglasiService } from 'src/app/services/oglasi.service';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-single-oglas',
  templateUrl: './single-oglas.component.html',
  styleUrls: ['./single-oglas.component.css']
})
export class SingleOglasComponent implements OnInit {
  constructor(private _Activatedroute:ActivatedRoute, private service: OglasiService, private router: Router, public loaderService: LoaderService) { }
  single: any;
  id: any;
  ngOnInit(): void {

    this._Activatedroute.paramMap.subscribe(params => { 
      this.id = params.get('id'); 
  });
  this.service.getOglas(this.id).subscribe(
    res=> {
      this.single = res;
      console.log(this.single.selectedFile)
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