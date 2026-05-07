import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})

export class RegisterComponent {

  username = '';

  password = '';

  registerUser() {

    localStorage.setItem('username', this.username);

    localStorage.setItem('password', this.password);

    alert("Registration Successful");

  }

}