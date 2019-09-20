import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.less']
})
export class AccountComponent implements OnInit {

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
