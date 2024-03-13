import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.css', '../app.component.css'],
})
export class LoginScreenComponent {
  constructor(
    private router: Router,
    private http: HttpClient,
    private userService: UserService
  ) {}
  userDetails = {
    username: '',
    password: '',
  };
  login() {
    console.log(this.userDetails);
    this.router.navigate(['home']);
    // this.http
    //   .post(this.userService.usersUrl + 'login', this.userDetails)
    //   .subscribe({
    //     next: (response) => {
    //       console.log('Registration successful!', response);
    //       this.router.navigate(['login']);
    //     },
    //     error: (error) => {
    //       console.error('Registration failed!', error);
    //     },
    //   });
  }
}
