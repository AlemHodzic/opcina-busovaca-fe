import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {
  constructor(private http: HttpClient) {
  }
 //url = 'https://busovaca-api.herokuapp.com/servisi'
 url = 'http://localhost:5000/photos'
 getPhotos(page){
   return this.http.get(`${this.url}/getPhotos?page=${page}`)
 }

 createPhoto(object){
   this.http.post(this.url, object).subscribe(
     res => {
       window.location.reload()
     }
   )
 }


 deletePhoto(id){
   this.http.delete(`${this.url}/${id}`).subscribe(
     res => {
       window.location.reload()
     }
   )
 }


}
