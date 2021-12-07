import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OglasiService {
  constructor(private http: HttpClient) {
  }
 url = 'https://busovaca-api.herokuapp.com/oglasi'
 //url = 'http://localhost:5000/oglasi'
 

 getOglasi(page){
   return this.http.get(`${this.url}/getOglasi?page=${page}`)
 }


 getNabavke(page){
  return this.http.get(`${this.url}/getNabavke?page=${page}`)
}

 createOglas(object){
   this.http.post(this.url, object).subscribe(
     res => {
       window.location.reload()
     }
   )
 }
 getOglas(id){
  return this.http.get(`${this.url}/getOglasi/${id}`)
}
searchByName(name){
  //http://localhost:5000/oglasi/getOglas/naba
  return this.http.get(`${this.url}/getOglas/${name}`)
}

 deleteOglas(id){
   this.http.delete(`${this.url}/${id}`).subscribe(
     res => {
       window.location.reload()
     }
   )
 }


}
