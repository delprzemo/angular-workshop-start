import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.less']
})
export class LoginFormComponent implements OnInit {
  isLogged = false;
  isLoginForm = false;

  constructor() { }

  ngOnInit() {
  }

  openLoginForm() {
    this.isLoginForm = !this.isLoginForm;
  }

  login() {
    this.isLogged = true;
  }

  cancel() {
    this.isLoginForm = false;
  }

  logout() {
    this.isLogged = false;
    this.isLoginForm = false;
  }
}
