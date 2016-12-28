import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';
/*
  Generated class for the ImageService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/

let headers = new Headers({ 'Content-Type': 'application/json' });
let options = new RequestOptions({ headers: headers });

@Injectable()
export class ImageService {

  url = 'http://localhost:8080/api/image/upload';

  constructor(public http: Http) {
    console.log('Hello ImageService Provider');
  }

  upload(file) : Observable<File> {
     let body = JSON.stringify(file);
     return this.http.post(`${this.url}`,body, options).map(res => <File>res.json())
  }

}
