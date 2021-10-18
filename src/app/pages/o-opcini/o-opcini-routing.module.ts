import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistorijatComponent } from './historijat/historijat.component';
import { ONamaComponent } from './o-nama/o-nama.component';
const routes: Routes = [
  {path: 'o-nama', component: ONamaComponent},
  {path: 'historijat', component: HistorijatComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OOpciniRoutingModule { }
