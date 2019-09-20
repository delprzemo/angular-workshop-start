import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { UserLogin } from '../models/user-login';
import { User } from '../models/user';
import { UserResponse } from '../models/user-response';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  user: User;

  constructor(private http: HttpClient) {
    this.user = new User();
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

  public logIn(login: string, password: string): Observable<{ token: string }> {
    const object = new UserLogin(login, password);
    const options = { headers: new HttpHeaders({ 'Content-type': 'application/json' }) };
    return this.http.post<{ token: string }>(environment.apiUrl + 'api/login', object, options);
  }

  public logOut() {
    this.user = new User();
  }

  public isLogged() {
    return !!this.user.token;
  }

  public getUser(): User {
    return this.user;
  }
}
