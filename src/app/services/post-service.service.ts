import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {
  
  constructor(private http: HttpClient) { }
  url = 'http://localhost:5000/posts'

  getPosts(){
    return this.http.get(this.url)
  }
  getHeaderPosts(){
    return this.http.get(`${this.url}/novosti`)
  }
  

  getPost(id){
    return this.http.get(`${this.url}/${id}`)
  }

  createPost(object){
    this.http.post(this.url, object).subscribe(
      res => {
        console.log(res);
      }
    )
  }

  updatePost(id, object){
    this.http.patch(`${this.url}/${id}`, object).subscribe(
      res => {
        console.log(res);
      }
    )
  }

  deletePost(id){
    this.http.delete(`${this.url}/${id}`).subscribe(
      res => {
        console.log(res);
      }
    )
  }



}
