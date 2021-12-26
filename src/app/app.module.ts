import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClient, HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LandingComponent } from './components/landing/landing.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { JavneUstanoveComponent } from './components/javne-ustanove/javne-ustanove.component';
import { CounterComponent } from './components/counter/counter.component';
import { AnimatedDigitComponent } from './animated/animated-digit/animated-digit.component';
import { FooterComponent } from './components/footer/footer.component'
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatMenuModule} from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';
import { NacelnikPageComponent } from './components/nacelnik-page/nacelnik-page.component';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { SharedModule } from './shared-modules/shared/shared.module';
import { GlasnikComponent } from './pages/glasnik/glasnik.component';
import { UpravaComponent } from './pages/uprava/uprava.component';
import { VijeceComponent } from './pages/vijece/vijece.component';
import { ObrasciComponent } from './pages/obrasci/obrasci.component';

import {MatCardModule} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { InterceptorService } from './loader/interceptor.service';
import { ServisNabavkeComponent } from './components/servis-nabavke/servis-nabavke.component';
import { DocumentsComponent } from './pages/dokumenti/documents/documents.component';
import { DokumentiZakComponent } from './pages/dokumenti-zakljuci/dokumenti-zak/dokumenti-zak.component';
import { ServisSingleComponent } from './pages/servis-single/servis-single.component';
import { RadnaTijelaComponent } from './pages/radna-tijela/radna-tijela.component';
import { SinglePostComponent } from './components/single-post/single-post.component';
import { DokumentaracComponent } from './pages/dokumentarac/dokumentarac.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { SafePipe } from './safe.pipe';





export function HttpLoaderFactory(http: HttpClient){
  return new TranslateHttpLoader(http, './assets/i18n/', '.json')
}




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LandingComponent,
    JavneUstanoveComponent,
    CounterComponent,
    AnimatedDigitComponent,
    FooterComponent,
    NacelnikPageComponent,
    GlasnikComponent,
    UpravaComponent,
    VijeceComponent,
    ObrasciComponent,
    ServisNabavkeComponent,
    DocumentsComponent,
    DokumentiZakComponent,
    ServisSingleComponent,
    RadnaTijelaComponent,
    SinglePostComponent,
    DokumentaracComponent,
    ContactFormComponent,
    SafePipe,


  ],
  imports: [
    MatExpansionModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    FormsModule,
    ToastrModule,
    CarouselModule,
    MatCardModule,
    MatSidenavModule,
    MatMenuModule,
    MatListModule,
    SharedModule,
    MatProgressSpinnerModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    TranslateModule.forRoot({
      defaultLanguage: 'bs',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true}

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
