import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AktuelnostiModuleRoutingModule } from './aktuelnosti-module-routing.module';
import { AktuelnostiComponent } from './aktuelnosti/aktuelnosti.component';
import { SharedModule } from '../shared-modules/shared/shared.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';




@NgModule({
  declarations: [
    AktuelnostiComponent
  ],
  imports: [
    CommonModule,
    AktuelnostiModuleRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    MatDialogModule,
    FormsModule,
  ]
})
export class AktuelnostiModuleModule { }
