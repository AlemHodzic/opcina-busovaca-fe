import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminPanelComponent } from '../admin-panel/admin-panel.component';
import { EditDialogComponent } from '../edit-dialog/edit-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { HttpClientModule } from '@angular/common/http';
import {MatTabsModule} from '@angular/material/tabs';
import { AddNovostComponent } from '../add-novost/add-novost.component';
import { AddServisComponent } from '../add-servis/add-servis.component';
import { EditServisComponent } from '../edit-servis/edit-servis.component';

@NgModule({
  declarations: [
    AdminPanelComponent,
    AddNovostComponent,
    EditDialogComponent,
    AddServisComponent, 
    EditServisComponent

  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatDialogModule,
    MatTabsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ]
})
export class AdminModule { }
