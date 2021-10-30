import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeoDemoComponent } from './geo-demo/geo-demo.component';
import { HistorijatComponent } from './historijat/historijat.component';
import { JavnaPredUstanoveComponent } from './javna-pred-ustanove/javna-pred-ustanove.component';
import { NacelnikComponent } from './nacelnik/nacelnik.component';
import { ONamaComponent } from './o-nama/o-nama.component';
import { SocioEkoComponent } from './socio-eko/socio-eko.component';
const routes: Routes = [
  {path: 'o-nama', component: ONamaComponent},
  {path: 'historijat', component: HistorijatComponent},
  {path: 'geografija-i-demografija', component: GeoDemoComponent},
  {path: 'socio-ekonomski-profit', component: SocioEkoComponent},
  {path: 'opcinski-nacelnik', component: NacelnikComponent},
  {path: 'javne-ustanove-i-preduzeca', component: JavnaPredUstanoveComponent},
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OOpciniRoutingModule { }
