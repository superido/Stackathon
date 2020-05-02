import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { User } from '../models/user';
import { TUser } from '../models/t-user';
import { HttpUtil } from '../util/http.util';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private httpUtil: HttpUtil) {}

  login(username: string, password: string) {
    let param = { username: username, password: password };
    console.log(param);
    let url = '/login';
    return this.httpUtil.postForm(url, param);
  }

  register(tUser: TUser): any {
    return this.httpUtil.post('/register', tUser);
  }

  public get currentUserToken(): string {
    return sessionStorage.getItem('token');
  }

  // postSignIn(user) {
  //   return this.http.post(`${environment.baseUrl}/login`, JSON.stringify(user), httpOptions);
  // }
}
