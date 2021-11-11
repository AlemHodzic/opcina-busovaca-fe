import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AktuelnostiComponent } from './components/aktuelnosti/aktuelnosti.component';
import { LandingComponent } from './components/landing/landing.component';
import { LoginComponent } from './components/login/login.component';
import { SinglePostComponent } from './components/single-post/single-post.component';
import { AuthGuard } from './guards/auth.guard';
import { UpravaComponent } from './pages/uprava/uprava.component';
import { VijeceComponent } from './pages/vijece/vijece.component';


const routes: Routes = [
  {path: '', component: LandingComponent},
  {path: 'admin', loadChildren:() => import('./admin-module/admin/admin.module')
  .then(mod=> mod.AdminModule), canActivate: [AuthGuard]},
  {path: 'clanak/:id', component: SinglePostComponent},
  {path: 'aktuelnosti/page/:number', component: AktuelnostiComponent},
  {path: 'login', component: LoginComponent},
  {path: 'sluzbe-uprave', component: UpravaComponent},
  {path: 'vijecnici', component: VijeceComponent},
  {path: 'o-opcini', loadChildren:() => import('./pages/o-opcini/o-opcini.module')
  .then(mod=> mod.OOpciniModule)
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
