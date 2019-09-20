import { Component, OnInit, ViewChild } from '@angular/core';
import { UserLogin } from './models/user-login';
import { FormControl } from '@angular/forms';
import { AccountService } from './services/account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.less']
})
export class AccountComponent implements OnInit {
  @ViewChild('form') form: FormControl;
  
  isLoginForm = false;
  userLoginModel: UserLogin;

  constructor(private accountService: AccountService) {
    this.userLoginModel = new UserLogin();
   }

  ngOnInit() {
  }

  openLoginForm() {
    this.isLoginForm = !this.isLoginForm;
  }

  login() {
      this.accountService.logIn(this.userLoginModel.email, this.userLoginModel.password)
      .subscribe((response: {token: string}) => {
        this.accountService.getUserData().subscribe((userData)=> {
          this.accountService.setActiveUser(this.userLoginModel.email, 
            this.userLoginModel.password, 
            response.token, 
            userData.data.avatar);
        });
      }, error => alert( JSON.stringify(error)))
    }

  cancel() {
    this.isLoginForm = false;
  }

  logout() {
    this.isLoginForm = false;
    this.accountService.logOut();
  }

  isLogged() {
    return this.accountService.isLogged();
  }

  getUser() {
    return this.accountService.getUser();
  }

}
