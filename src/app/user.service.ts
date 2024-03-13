import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  usersUrl: string;
  constructor() {
    this.usersUrl = 'http://192.168.1.253:8080/';
  }

  // public login()
}
