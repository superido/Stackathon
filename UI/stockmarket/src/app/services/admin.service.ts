import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpUtil } from '../util/http.util';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  constructor(private httpUtil: HttpUtil) {}
}
