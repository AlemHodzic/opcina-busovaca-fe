import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServisServiceService {

  constructor(private http: HttpClient) {
   }
  url = 'http://localhost:5000/servisi'
  getServisneInformacije(page){
    return this.http.get(`${this.url}/getServisi?page=${page}`)
  }
  createServise(object){
    this.http.post(this.url, object).subscribe(
      res => {
        console.log(res);
      }
    )
  }
}
