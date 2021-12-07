import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServisServiceService {

  constructor(private http: HttpClient) {
   }
    url = 'https://busovaca-api.herokuapp.com/servisi'
    //url = 'http://localhost:5000/servisi'

  getServisneInformacije(page){
    return this.http.get(`${this.url}/getServisi?page=${page}`)
  }
  getServisneInformacijeForMain(){
    return this.http.get(`${this.url}/getServisi?page=1&size=3`)
  }
  getServis(id){
    return this.http.get(`${this.url}/getServisi/${id}`)
  }
  searchByName(name){
    return this.http.get(`${this.url}/getServis/${name}`)
  }
  createServise(object){
    this.http.post(this.url, object).subscribe(
      res => {
        window.location.reload()
      }
    )
  }
  updateServis(id, object){
    this.http.patch(`${this.url}/${id}`, object).subscribe({
      complete(){
        window.location.reload()
      }
    
    }


    )
  }

  deleteServis(id){
    this.http.delete(`${this.url}/${id}`).subscribe(
      res => {
        window.location.reload()
      }
    )
  }


}
