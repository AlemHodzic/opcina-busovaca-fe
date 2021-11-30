import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OglasModuleRoutingModule } from './oglas-module-routing.module';
import { OglasiPageComponent } from '../oglasi-page/oglasi-page.component';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from 'src/app/shared-modules/shared/shared.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { SingleOglasComponent } from '../single-oglas/single-oglas.component';


@NgModule({
  declarations: [
    OglasiPageComponent,
    SingleOglasComponent
  ],
  imports: [
    CommonModule,
    OglasModuleRoutingModule,
    SharedModule,
    TranslateModule,
    ReactiveFormsModule,
    MatDialogModule,
    FormsModule,
  ]
})
export class OglasModuleModule { }
