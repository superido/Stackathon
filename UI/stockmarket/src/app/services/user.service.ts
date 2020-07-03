import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
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

  login(user) {
    const param = { userName: user.userName, password: user.password };
    console.log(param);
    const url = 'userapi/user/userinfo/login';
    return this.httpUtil.post(url, param);
  }

  register(tUser: TUser): any {
    return this.httpUtil.post('userapi/user/userinfo/signup', tUser);
  }

  public get currentUserToken(): string {
    return sessionStorage.getItem('token');
  }

  // postSignIn(user) {
  //   return this.http.post(`${environment.baseUrl}/login`, JSON.stringify(user), httpOptions);
  // }
}
