import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  public hasError = false;
  public emailError = false;
  public messageError = false;
  constructor() { }

  ngOnInit(): void {
  }

  inputName(){
    this.hasError = !this.hasError;
  }
  inputEmail(){
    this.emailError = !this.emailError;
  }
  inputTextarea(){
    this.messageError = !this.messageError;
  }
}
