import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';
import { AktuelnostiComponent } from './components/aktuelnosti/aktuelnosti.component';
import { LandingComponent } from './components/landing/landing.component';
import { SinglePostComponent } from './components/single-post/single-post.component';

const routes: Routes = [
  {path: '', component: LandingComponent},
  {path: 'admin', component: AdminPanelComponent},
  {path: 'clanak/:id', component: SinglePostComponent},
  {path: 'aktuelnosti', component: AktuelnostiComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
