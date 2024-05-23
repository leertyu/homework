import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LocalStorageService } from '../services/local-storage.service';
import { CategoryModel } from '../models/category-model';

const user = localStorage.getItem('USER');
const accessToken = user !== null ? JSON.parse(user).accessToken : ''
const questionUrl = 'https://training-homework.calllab.net/v1/questions';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + accessToken
  })
}

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private client: HttpClient, private localStorageService: LocalStorageService) { }

  getCategories(): Observable<any>{
    return this.client.get(
      questionUrl + '/categories', httpOptions
    )
  }
}
