import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNewsComponent } from '../side-news/side-news.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


@NgModule({
  declarations: [
    SideNewsComponent
  ],
  imports: [
    CommonModule,
    MatProgressSpinnerModule
  ],
  exports: [
    SideNewsComponent
  ]
})
export class SharedModule { }
