import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AccountService } from '../common/account-service.service';
import { nextContext } from '@angular/core/src/render3';

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

  constructor(public accountService: AccountService) { }

  ngOnInit() {
  }

  submit() {


    if (this.form.valid) {
      type token = { token: string };
      this.accountService.logIn(this.email, this.userPassword)
        .subscribe(
          (response: token) => {
            this.accountService.getUserData().subscribe(userData => {
              this.accountService.setActiveUser(this.email,
                this.userPassword,
                response.token,
                userData.data.avatar);
            });
          });
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
    this.accountService.logOut();
    this.isLoginForm = false;
  }
}
