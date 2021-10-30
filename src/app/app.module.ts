import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditDialogComponent } from './components/edit-dialog/edit-dialog.component';
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
import { SinglePostComponent } from './components/single-post/single-post.component';
import { NacelnikPageComponent } from './components/nacelnik-page/nacelnik-page.component';
import { AktuelnostiComponent } from './components/aktuelnosti/aktuelnosti.component';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { SharedModule } from './shared-modules/shared/shared.module';
import { GlasnikComponent } from './pages/glasnik/glasnik.component';
import { UpravaComponent } from './pages/uprava/uprava.component';
import { VijeceComponent } from './pages/vijece/vijece.component';
import { ObrasciComponent } from './pages/obrasci/obrasci.component';
import { FotogalerijaComponent } from './pages/fotogalerija/fotogalerija.component';
import {MatCardModule} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';


@NgModule({
  declarations: [
    AppComponent,
    AdminPanelComponent,
    EditDialogComponent,
    NavbarComponent,
    LandingComponent,
    JavneUstanoveComponent,
    CounterComponent,
    AnimatedDigitComponent,
    FooterComponent,
    SinglePostComponent,
    NacelnikPageComponent,
    AktuelnostiComponent,
    GlasnikComponent,
    UpravaComponent,
    VijeceComponent,
    ObrasciComponent,
    FotogalerijaComponent,

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
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
