import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { LoginComponent } from './components/login/login.component';
import { SinglePostComponent } from './components/single-post/single-post.component';

import { AuthGuard } from './guards/auth.guard';
import { DokumentiZakComponent } from './pages/dokumenti-zakljuci/dokumenti-zak/dokumenti-zak.component';
import { DocumentsComponent } from './pages/dokumenti/documents/documents.component';
import { ObrasciComponent } from './pages/obrasci/obrasci.component';
import { RadnaTijelaComponent } from './pages/radna-tijela/radna-tijela.component';
import { ServisSingleComponent } from './pages/servis-single/servis-single.component';
import { UpravaComponent } from './pages/uprava/uprava.component';
import { VijeceComponent } from './pages/vijece/vijece.component';


const routes: Routes = [
  { path: '', component: LandingComponent },
  {
    path: 'admin', loadChildren: () => import('./admin-module/admin/admin.module')
      .then(mod => mod.AdminModule), canActivate: [AuthGuard]
  },
 { path: 'clanak/:id', component: SinglePostComponent },
  { path: 'servisne-informacije/:id', component: ServisSingleComponent },
 // { path: 'aktuelnosti/page/:number', component: AktuelnostiComponent },
  { path: 'login', component: LoginComponent },
  { path: 'sluzbe-uprave', component: UpravaComponent },
  { path: 'vijecnici', component: VijeceComponent },
  { path: 'dokumenti', component: DocumentsComponent },
  { path: 'dokumenti-i-zakljucci', component: DokumentiZakComponent },
  { path: 'radna-tijela-povjerenstva', component: RadnaTijelaComponent },
  { path: 'obrasci', component: ObrasciComponent },
  {
    path: 'o-opcini', loadChildren: () => import('./pages/o-opcini/o-opcini.module')
      .then(mod => mod.OOpciniModule)
  },
  {
    path: 'aktuelnosti', loadChildren: () => import('./aktuelnosti-module/aktuelnosti-module.module')
      .then(mod => mod.AktuelnostiModuleModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
