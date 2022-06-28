import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { IMessage } from '../interfaces/message.interface';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor(
    private http: HttpClient,
  ) { }

  send(message: IMessage):Observable<any>{
    const url = 'https://jsengine.herokuapp.com/contact/message/send';
    return this.http.post(url, message);
  }
}
