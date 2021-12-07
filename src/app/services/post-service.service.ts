import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {
  
  constructor(private http: HttpClient) { }
  url = 'https://busovaca-api.herokuapp.com/posts'
  //url = 'http://localhost:5000/posts'
  getPosts(){
    return this.http.get(this.url)
  }
  getHeaderPosts(){
    return this.http.get(`${this.url}/novosti`)
  }
  getPostsWithNoImgs(){
    return this.http.get(`${this.url}/novostiBezSlika`)
  }
  getPaginatedPosts(page){
    //http://localhost:5000/posts/sveNovosti?page=-1&size=3
    return this.http.get(`${this.url}/sveNovosti?page=${page}`)
  }
  searchByName(name){
    return this.http.get(`${this.url}/clanak/${name}`)
  }

  getPost(id){
    return this.http.get(`${this.url}/${id}`)
  }

  createPost(object){
    this.http.post(this.url, object).subscribe(
      res => {
        window.location.reload()
      }
    )
  }

  updatePost(id, object, uid){
    const headers = { 'UID': uid};
    this.http.patch(`${this.url}/${id}`, object, {headers}).subscribe(
      res => {
        window.location.reload()
      }
    )
  }

  deletePost(id, uid){
    const headers = { 'UID': uid};
    this.http.delete(`${this.url}/${id}`, {headers}).subscribe(
      res => {
        window.location.reload()
      }
    )
  }



}
