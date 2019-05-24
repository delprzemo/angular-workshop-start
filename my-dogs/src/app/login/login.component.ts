import { Component, OnInit, ViewChild } from '@angular/core';
import { AccountService } from '../services/account.service';
import { User } from '../models/user.model';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  email: string = "";
  password: string = "";
  showLoginForm: boolean = false;
  @ViewChild('form') form: FormControl;

  constructor(protected accountService: AccountService) { }

  ngOnInit() {

  }

  login() {
    if (this.form.valid) {
      type token = { token: string };
      this.accountService.logIn(this.email, this.password)
        .subscribe(
          (response: token) => {
            this.accountService.getUserData().subscribe(userData => {
              this.accountService.setActiveUser(userData.data.email,
                this.password,
                response.token,
                userData.data.avatar);
            });
          });
    } else {
      alert("email and password required")
    }

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
