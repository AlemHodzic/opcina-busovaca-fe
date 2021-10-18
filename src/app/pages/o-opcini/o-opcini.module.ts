import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OOpciniRoutingModule } from './o-opcini-routing.module';
import { ONamaComponent } from './o-nama/o-nama.component';
import { HistorijatComponent } from './historijat/historijat.component';
import { SharedModule } from 'src/app/shared-modules/shared/shared.module';


@NgModule({
  declarations: [
    ONamaComponent,
    HistorijatComponent,

  ],
  imports: [
    CommonModule,
    OOpciniRoutingModule,
    SharedModule
  ]
})
export class OOpciniModule { }
