import { Injectable } from '@angular/core';
import { UserLogin } from './models/user-login.model';
import { HttpClientModule, HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserResponseModel } from './models/user-response.model';
import { UserModel } from './models/user.model';

@Injectable({
  providedIn: 'root'
})

export class AccountService {
  public user: UserModel;

  constructor(private http: HttpClient) {
    this.user = new UserModel();
   }

  public getUserData(): Observable<UserResponseModel> {
    return this.http.get<UserResponseModel>(environment.apiUrl + 'api/users/2');
  }

  public setActiveUser(email: string, password: string, token: string, avatar: string) {
    this.user.email = email;
    this.user.password = password;
    this.user.token = token;
    this.user.avatar = avatar;
  }

  public logIn(login: string, password: string): Observable<{token: string}> {
    const object = new UserLogin(login, password);
    const options = {headers: new HttpHeaders({'Content-type': 'application/json'})};
    return this.http.post<{token: string}>(environment.apiUrl + 'api/login', object, options);
  }

  public logOut() {
    this.user = new UserModel();
  }

  public isLogged() {
    return !!this.user.token;
  }

  public getUser(): UserModel {
    return this.user;
  }
}
