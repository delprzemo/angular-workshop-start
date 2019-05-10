import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.less']
})
export class LoginFormComponent implements OnInit {
  isLogged = false;
  isLoginForm = false;
  email = "";
  userPassword = "";

  constructor() { }

  ngOnInit() {
  }

  emailChanged(event: Event) {
    this.email = (event.target as EventTarget & {value: any}).value;
  }

  passwordChanged(event: Event) {
    this.userPassword = event.target["value"];
  }

  openLoginForm() {
    this.isLoginForm = !this.isLoginForm;
  }

  login() {
    if (this.email && this.userPassword)
      this.isLogged = true;
    else
      alert("Please provide login and password")
  }

  cancel() {
    this.isLoginForm = false;
  }

  logout() {
    this.userPassword = "";
    this.email = "";
    this.isLogged = false;
    this.isLoginForm = false;
  }
}
