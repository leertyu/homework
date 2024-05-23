import { UserModel } from './../models/user-model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const authUrl = 'https://training-homework.calllab.net/v1/login';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private client: HttpClient) { }

  login(user: UserModel): Observable<any>{
    return this.client.post(
      authUrl , user, httpOptions
    )
  }

}
