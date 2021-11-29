import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FotogalerijaComponent } from './fotogalerija.component';

const routes: Routes = [
  {path: '', component: FotogalerijaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FotogalerijaRoutingModule { }
