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
export class CompanyService {
  constructor(private httpUtil: HttpUtil) {}

  getCompanyList() {
    const url = '/companyapi/companyinfo';
    return this.httpUtil.get(url);
  }

  getStockExchangeList() {
    const url = '/companyapi/companyinfo/stockEexchange';
    return this.httpUtil.get(url);
  }

  getStockPrice(param: any): any {
    return this.httpUtil.post('/companyapi/companyinfo/stock-price', param);
  }

  public get currentUserToken(): string {
    return sessionStorage.getItem('token');
  }
}
