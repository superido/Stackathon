import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json', 'X-Requested-With': 'XMLHttpRequest' })
};

@Injectable()
export class HttpUtil {
  private withCredentials: boolean = true;
  constructor(private http: HttpClient) {}

  post(url: string, param?: any) {
    url = `${environment.baseUrl}/url`;
    //url = this.getSessionIdUrl(url);
    //noinspection TypeScriptValidateTypes
    return this.http
      .post(url, param, httpOptions)
      // .map(this.extractData)
      // .catch(this.handleError);
  }
  postForm(url: string, param?: any) {
    url = `${environment.baseUrl}/url`;
    let formData: FormData = new FormData();
    formData.append('username', param.username);
    formData.append('password', param.password);

    //noinspection TypeScriptValidateTypes
    return this.http
      .post(url, formData, httpOptions)
      // .map(this.extractData)
      // .catch(this.handleError);
  }

  put(url: string, param?: any) {
    url = `${environment.baseUrl}/url`;
    //url = this.getSessionIdUrl(url);
    //noinspection TypeScriptValidateTypes
    return this.http
      .put(url, param, httpOptions)
      // .map(this.extractData)
      // .catch(this.handleError);
  }

  delete(url: string) {
    url = `${environment.baseUrl}/url`;
    //url = this.getSessionIdUrl(url);
    //noinspection TypeScriptValidateTypes
    return this.http
      .delete(url, httpOptions)
      // .map(this.extractData)
      // .catch(this.handleError);
  }

  get(url: string) {
    url = `${environment.baseUrl}/url`;
    //url = this.getSessionIdUrl(url);
    // let options = new RequestOptions({
    //   headers: this.headers,
    //   withCredentials: this.withCredentials,
    // });
    //noinspection TypeScriptValidateTypes
    return this.http
      .get(url, httpOptions)
      // .map(this.extractData)
      // .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || {};
  }

  private handleError(error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      // const err = body.error || JSON.stringify(body);
      // errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    // return Observable.throw(errMsg);
    return errMsg; // TODO
  }
}
