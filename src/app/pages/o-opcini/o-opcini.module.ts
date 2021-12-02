import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OOpciniRoutingModule } from './o-opcini-routing.module';
import { ONamaComponent } from './o-nama/o-nama.component';
import { HistorijatComponent } from './historijat/historijat.component';
import { SharedModule } from 'src/app/shared-modules/shared/shared.module';
import { GeoDemoComponent } from './geo-demo/geo-demo.component';
import { SocioEkoComponent } from './socio-eko/socio-eko.component';
import { NacelnikComponent } from './nacelnik/nacelnik.component';
import { JavnaPredUstanoveComponent } from './javna-pred-ustanove/javna-pred-ustanove.component';
import { PrivredaComponent } from './privreda/privreda.component';
import { TurizamComponent } from './turizam/turizam.component';
import { KulturaComponent } from './kultura/kultura.component';
import { ObrazovnaInfrastrukturaComponent } from './obrazovna-infrastruktura/obrazovna-infrastruktura.component';
import { SportComponent } from './sport/sport.component';
import { NvoSektorComponent } from './nvo-sektor/nvo-sektor.component';
import { MjesneZajedniceComponent } from './mjesne-zajednice/mjesne-zajednice.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {IvyGalleryModule} from 'angular-gallery';
import { TranslateModule } from '@ngx-translate/core';
import { NabavkeComponent } from './nabavke/nabavke.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    ONamaComponent,
    HistorijatComponent,
    GeoDemoComponent,
    SocioEkoComponent,
    NacelnikComponent,
    JavnaPredUstanoveComponent,
    PrivredaComponent,
    TurizamComponent,
    KulturaComponent,
    ObrazovnaInfrastrukturaComponent,
    SportComponent,
    NvoSektorComponent,
    MjesneZajedniceComponent,
    NabavkeComponent,

  ],
  imports: [
    IvyGalleryModule,
    MatExpansionModule,
    CommonModule,
    OOpciniRoutingModule,
    SharedModule,
    TranslateModule,
    ReactiveFormsModule,
    MatDialogModule,
    FormsModule,
  ]
})
export class OOpciniModule { }
