import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNewsComponent } from '../side-news/side-news.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    SideNewsComponent
  ],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    TranslateModule
  ],
  exports: [
    SideNewsComponent
  ]
})
export class SharedModule { }
