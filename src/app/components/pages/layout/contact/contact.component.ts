import { Component, OnInit } from '@angular/core';
import { IMessage } from 'src/app/interfaces/message.interface';
import { ContactsService } from 'src/app/services/contacts.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  // appName

  public hasError = false;
  public emailError = false;
  public messageError = false;
  public seleactError = false;

  //user message input
  public inName:string = '';
  public inEmail:string = '';
  public issue:string = '';
  public message:string = '';
  
 
  constructor(
    private contact: ContactsService,
  ) { }

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
  inputSeleact(){
    this.seleactError = !this.seleactError;
  }

  // userMessage
  userMessage(){
    const message: IMessage = {
      uuid: 'adeac3d4-88d6-453c-aebf-8d1e315c863c',
      name: this.inName,
      email: this.inEmail,
      issue: this.issue,
      message: this.message
    }

    this.contact.send(message)
    .subscribe(data => {
      alert(` Thankque ${data.success.name} sent your message`);
      console.log(data);
    }, error =>{
      alert(`Not message sent`);
      console.log(error);
    })
  }

}
