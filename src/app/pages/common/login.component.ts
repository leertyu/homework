import { Component } from '@angular/core';
import { UserModel } from '../../models/user-model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  form = new UserModel();

  constructor() {}

  onSubmit(){
    const { username, password } = this.form

    console.log(username, password);
  }

}
