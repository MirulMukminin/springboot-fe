import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../user.service';
@Component({
  selector: 'app-register-screen',
  templateUrl: './register-screen.component.html',
  styleUrls: ['./register-screen.component.css', '../app.component.css'],
})
export class RegisterScreenComponent {
  constructor(
    private router: Router,
    private http: HttpClient,
    private userService: UserService
  ) {}

  userDetails = {
    fname: '',
    username: '',
    email: '',
    password: '',
  };
  register() {
    console.log(this.userDetails);
    this.router.navigate(['login']);
    // this.http
    //   .post(this.userService.usersUrl + 'register', this.userDetails)
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
