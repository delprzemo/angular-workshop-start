import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.less']
})
export class LoginFormComponent implements OnInit {
  @ViewChild('form') form: FormControl;
  isLogged = false;
  isLoginForm = false;
  email = "";
  userPassword = "";

  constructor() { }

  ngOnInit() {
  }
  
  submit() {
    if(this.form.valid) {
      this.isLogged = true;
    }
  }

  openLoginForm() {
    this.isLoginForm = !this.isLoginForm;
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
