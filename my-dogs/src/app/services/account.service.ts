import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable()

export class AccountService {

  private user: User;

  constructor() {
    this.user = new User();
  }

  logIn(email = "", password = "") {
    if (email === "eve.holt@reqres.in" && password === "cityslicka") {
      this.user = new User(email, password, "d22d2d2d");
    } else {
      alert("Wrong email or password");
    }
  }

  logOut() {
    this.user = new User();
  }

  getUser() {
    return this.user;
  }

  isLogged() {
    return this.user.token !== "";
  }
}
