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
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    FormsModule,
    ToastrModule,
    CarouselModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
