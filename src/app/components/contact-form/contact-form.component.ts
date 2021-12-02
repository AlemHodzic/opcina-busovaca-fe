import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  constructor(public dialog: MatDialog) { }
  success: boolean = false;
  ngOnInit(): void {
  }
  alreadySent2: Boolean = false;
  alreadySent: Boolean = false;
  validationCompleted: Boolean = false;
  emailCorrect: Boolean = true;
  nameCorrect: Boolean = true;
  messageCorrect: Boolean = true;
  inputName: any;
  inputEmail: any;
  inputMessage: any;


  close(){
    let successMessage = document.getElementsByClassName("success_container");
    successMessage[0].classList.toggle("closed");
  }
  closeDialog(){
    this.dialog.closeAll();
  }

  // npm install emailjs-com
  public sendEmail(e: Event) {

    e.preventDefault();
        emailjs.sendForm('service_m1lbran', 'template_busovaca', e.target as HTMLFormElement, 'user_gCiOA3ejIvKtil3O0bGRt')
        .then((result: EmailJSResponseStatus) => {
          console.log(result.text);
          this.success = true;
        }, (error) => {
          console.log(error.text);
        });


  }
}

