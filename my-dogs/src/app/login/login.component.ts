import { Component, OnInit } from '@angular/core';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  email: string = "";
  password: string = "";
  showLoginForm: boolean = false;

  constructor(protected accountService: AccountService) { }

  ngOnInit() {
  }

  emailChange(event: any) {
    this.email = event.target.value
  }

  pswChange(event: any) {
    this.password = event.target.value
  }

  login() {
    this.accountService.logIn(this.email, this.password);
  }

  logout() {
    this.accountService.logOut();
    this.email = "";
    this.password = "";
  }

  loginFormClick() {
    this.showLoginForm = true;
  }

  cancel() {
    this.showLoginForm = false;
  }


}
