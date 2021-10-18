import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { PostServiceService } from 'src/app/services/post-service.service';

@Component({
  selector: 'app-aktuelnosti',
  templateUrl: './aktuelnosti.component.html',
  styleUrls: ['./aktuelnosti.component.css']
})
export class AktuelnostiComponent implements OnInit {

  constructor(private service: PostServiceService, private router: Router,  private formBuilder: FormBuilder) { }
  searchForm = this.formBuilder.group({
    searchBox: ''
  });
  warning: boolean = false;

  page: number = 1;
  loaded: boolean = false;
  filteredNews: any[] = [];
  noResult: boolean = false;
  ngOnInit(): void {
    this.service.getPaginatedPosts(this.page).subscribe(
      res=> {
        this.filteredNews = res as [];
        this.loaded = true;
      }
    )
  }
  previousPage(){
    this.noResult = false;
    if(this.page <= 1){
      console.log("vec je 1 pokusavate manje od 1")
    }
    else{
      this.loaded = false;
      this.filteredNews = [];
      this.page -= 1;
      this.service.getPaginatedPosts(this.page).subscribe(
        res=> {
          this.filteredNews = res as [];
          this.loaded = true;
        }
      )
    }
  }

  nextPage(){
    this.noResult = false;
    this.page++;
    this.loaded = false;
    this.filteredNews = [];
    this.service.getPaginatedPosts(this.page).subscribe(
      res=> {
        this.filteredNews = res as [];
        this.loaded = true;
      }
    )
  }

  onSubmit(){
    this.noResult = false;
    if(this.searchForm.value.searchBox.length < 4){
      this.warning = true;
    }else{
      this.loaded = false;
      this.filteredNews = [];
      this.warning = false;
      this.service.searchByName(this.searchForm.value.searchBox).subscribe(
        res=> {
          this.filteredNews = res as [];
          if(this.filteredNews.length == 0){
            console.log("no results")
            this.noResult = true;
          }else{
            this.noResult = false;
          }
          this.loaded = true;
        }
      )
    }
   
  }

  onSearchChange(e){
    if(e == ''){
    this.noResult = false;
    this.filteredNews = [];
    this.loaded = false;
    this.page = 1;
    this.service.getPaginatedPosts(this.page).subscribe(
      res=> {
        this.filteredNews = res as [];
        this.loaded = true;
      }
    )
    }
  }
}
