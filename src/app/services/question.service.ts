import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LocalStorageService } from '../services/local-storage.service';
import { CategoryModel } from '../models/category-model';

var  value = localStorage.getItem('USER');
var a = value !== null ? JSON.parse(value) : new CategoryModel()
const authUrl = 'https://training-homework.calllab.net/v1/login';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json',
    'Authorization ': 'Bearer ' + a.accessToken
  })
}

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private client: HttpClient, private localStorageService: LocalStorageService) { }

  getCategories(): Observable<any>{
    var  value = localStorage.getItem('USER');

    return this.client.get(
      authUrl, httpOptions
    )
  }

}
