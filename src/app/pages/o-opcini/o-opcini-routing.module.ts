import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeoDemoComponent } from './geo-demo/geo-demo.component';
import { HistorijatComponent } from './historijat/historijat.component';
import { ONamaComponent } from './o-nama/o-nama.component';
const routes: Routes = [
  {path: 'o-nama', component: ONamaComponent},
  {path: 'historijat', component: HistorijatComponent},
  {path: 'geografija-i-demografija', component: GeoDemoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OOpciniRoutingModule { }
