import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  private apiUrl = 'http://127.0.0.1:8000/api';


  constructor(private http: HttpClient) { }

  getArticles(): Observable<any> {
    return this.http.get(`${this.apiUrl}/artigos`);
  }

  getArticle(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/artigos/${id}`);
  }
  
  
}
