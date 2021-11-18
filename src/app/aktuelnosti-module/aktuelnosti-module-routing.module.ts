import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AktuelnostiComponent } from './aktuelnosti/aktuelnosti.component';


const routes: Routes = [
  { path: 'page/:number', component: AktuelnostiComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AktuelnostiModuleRoutingModule { }
