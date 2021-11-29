import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FotogalerijaRoutingModule } from './fotogalerija-routing.module';
import { FotogalerijaComponent } from './fotogalerija.component';
import { SharedModule } from 'src/app/shared-modules/shared/shared.module';



@NgModule({
  declarations: [
    FotogalerijaComponent
  ],
  imports: [
    CommonModule,
    FotogalerijaRoutingModule,
    SharedModule,

  ]
})
export class FotogalerijaModule { }
