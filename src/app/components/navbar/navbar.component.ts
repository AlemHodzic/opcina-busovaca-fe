import { Component, OnInit, HostListener, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';
import { LoaderService } from 'src/app/loader/loader.service';
import { TranslateService } from '@ngx-translate/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ContactFormComponent } from '../contact-form/contact-form.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private document: Document, private router: Router,  public translate: TranslateService, private fb: FormBuilder, public dialog: MatDialog) {
    translate.addLangs(['bs', 'hr']);
    translate.setDefaultLang('bs');
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/bs|hr/) ? browserLang : 'bs');
  }
  currentLanguage: any;
  test: number = window.innerHeight/9.5;
  toggle = [];
  countryForm: FormGroup;
  countries = ['bs', 'hr'] 
  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (document.body.scrollTop > this.test ||     
    document.documentElement.scrollTop > this.test) {
     this.document.getElementById("navbar")?.classList.add('fixed');
     this.document.getElementById("filler").style.display = "block";
    }else{
      this.document.getElementById("navbar")?.classList.remove('fixed');
      this.document.getElementById("filler").style.display = "none";
    }
  }

  ngOnInit(): void {
    this.currentLanguage = localStorage.getItem('language');
    if(this.currentLanguage == "bs"){
      this.countryForm = this.fb.group({
        countryControl: ['bs']
      });
      this.translate.use('bs')
    }else if(this.currentLanguage == "hr"){
      this.countryForm = this.fb.group({
        countryControl: ['hr']
      });
      this.translate.use('hr')
    }else{
      this.countryForm = this.fb.group({
        countryControl: ['bs']
      });
      this.translate.use('bs')
    }
  }
  openNav() {
    document.getElementById("mySidebar").style.width = "300px";
  }
  closeNav() {
    document.getElementById("mySidebar").style.width = "0";
  }
  openContact(){
    this.dialog.open(ContactFormComponent)
  }
  /*selectLanguage(event: any){
    this.translate.use(event.target.value)
    localStorage.setItem('language', this.translate.currentLang)
    console.log(this.translate.currentLang)
  }*/
  selectLanguage(event: any){
    this.translate.use(event)
    localStorage.clear();
    localStorage.setItem('language', event)
    window.location.reload()
  }
}
