import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor(
    private http: HttpClient,
  ) { }

  sendMessage(name:string, email:string, issue:string, message:string):Observable<any>{
    const jsonFormet = {
      name: name,
      email: email,
      issue: issue,
      message: message,
    }
    const url = 'https://jsengine.herokuapp.com/contact/message/send';
    return this.http.post(url, jsonFormet);
  }
}
