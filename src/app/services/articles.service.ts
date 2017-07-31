import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ArticlesService {

  private articlesUrl = './assets/json/';  // URL to web api

  constructor(private http: Http) { }

  getArticles() : Observable<any> {
    // getting data through http
    return this.http
      .get(this.articlesUrl + 'news.json')
      .map(response => response.json());
  }

}