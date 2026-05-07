import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})

export class LoginComponent {

  username = '';

  password = '';

  loginUser() {

    const storedUser =
      localStorage.getItem('username');

    const storedPass =
      localStorage.getItem('password');

    if (
      this.username === storedUser &&
      this.password === storedPass
    ) {

      alert("Login Successful");

    }

    else {

      alert("Invalid Username or Password");

    }

  }

}