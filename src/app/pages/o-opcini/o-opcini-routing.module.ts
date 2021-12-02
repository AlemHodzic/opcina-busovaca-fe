import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeoDemoComponent } from './geo-demo/geo-demo.component';
import { HistorijatComponent } from './historijat/historijat.component';
import { JavnaPredUstanoveComponent } from './javna-pred-ustanove/javna-pred-ustanove.component';
import { KulturaComponent } from './kultura/kultura.component';
import { MjesneZajedniceComponent } from './mjesne-zajednice/mjesne-zajednice.component';
import { NabavkeComponent } from './nabavke/nabavke.component';
import { NacelnikComponent } from './nacelnik/nacelnik.component';
import { NvoSektorComponent } from './nvo-sektor/nvo-sektor.component';
import { ONamaComponent } from './o-nama/o-nama.component';
import { ObrazovnaInfrastrukturaComponent } from './obrazovna-infrastruktura/obrazovna-infrastruktura.component';
import { PrivredaComponent } from './privreda/privreda.component';
import { SocioEkoComponent } from './socio-eko/socio-eko.component';
import { SportComponent } from './sport/sport.component';
import { TurizamComponent } from './turizam/turizam.component';
const routes: Routes = [
  {path: 'o-nama', component: ONamaComponent},
  {path: 'historijat', component: HistorijatComponent},
  {path: 'geografija-i-demografija', component: GeoDemoComponent},
  {path: 'socio-ekonomski-profit', component: SocioEkoComponent},
  {path: 'opcinski-nacelnik', component: NacelnikComponent},
  {path: 'javne-ustanove-i-preduzeca', component: JavnaPredUstanoveComponent},
  {path: 'turizam', component: TurizamComponent},
  {path: 'kultura', component: KulturaComponent},
  {path: 'obrazovna-i-socijalna-infrastruktura', component: ObrazovnaInfrastrukturaComponent},
  {path: 'sport', component: SportComponent},
  {path: 'nvo', component: NvoSektorComponent},
  {path: 'privreda', component: PrivredaComponent},
  {path: 'mjesne-zajednice', component: MjesneZajedniceComponent},
  {path: 'javne-nabavke/page/:number', component: NabavkeComponent},
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OOpciniRoutingModule { }
