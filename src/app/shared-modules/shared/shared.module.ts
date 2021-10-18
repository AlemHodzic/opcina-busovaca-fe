import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNewsComponent } from '../side-news/side-news.component';



@NgModule({
  declarations: [
    SideNewsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SideNewsComponent
  ]
})
export class SharedModule { }
