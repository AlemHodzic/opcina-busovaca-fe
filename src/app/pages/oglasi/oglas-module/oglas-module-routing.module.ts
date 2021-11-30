import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OglasiPageComponent } from '../oglasi-page/oglasi-page.component';
import { SingleOglasComponent } from '../single-oglas/single-oglas.component';

const routes: Routes = [
  { path: 'page/:number', component: OglasiPageComponent},
  { path: 'oglas/:id', component: SingleOglasComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OglasModuleRoutingModule { }
