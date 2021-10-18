import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';
import { AktuelnostiComponent } from './components/aktuelnosti/aktuelnosti.component';
import { LandingComponent } from './components/landing/landing.component';
import { LoginComponent } from './components/login/login.component';
import { SinglePostComponent } from './components/single-post/single-post.component';
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
  {path: '', component: LandingComponent},
  {path: 'admin', component: AdminPanelComponent, canActivate: [AuthGuard]},
  {path: 'clanak/:id', component: SinglePostComponent},
  {path: 'aktuelnosti', component: AktuelnostiComponent},
  {path: 'login', component: LoginComponent},
  {path: 'o-opcini', loadChildren:() => import('./pages/o-opcini/o-opcini.module')
  .then(mod=> mod.OOpciniModule)
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
