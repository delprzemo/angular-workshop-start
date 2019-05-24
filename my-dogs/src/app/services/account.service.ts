import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { UserResponse } from '../models/user-response.model';

@Injectable()

export class AccountService {

  private user: User;

  constructor(private http: HttpClient) {
    this.user = new User();
  }

  public logIn(login: string, password: string): Observable<{token: string}> {
    const object = new User(login, password);
    const options = {headers: new HttpHeaders({'Content-type': 'application/json'})};
    return this.http.post<{token: string}>(environment.apiUrl + 'api/login', object, options);
  }

  public getUserData(): Observable<UserResponse> {
    return this.http.get<UserResponse>(environment.apiUrl + 'api/users/2');
  }

  public setActiveUser(email: string, password: string, token: string, avatar: string) {
    this.user.email = email;
    this.user.password = password;
    this.user.token = token;
    this.user.avatar = avatar;
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
