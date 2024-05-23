import { Component } from '@angular/core';
import { UserModel } from '../../models/user-model';
import { AuthService } from '../../services/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from '../error-dialog/error-dialog.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  form = new UserModel();

  constructor(private authService: AuthService, private dialog: MatDialog) {}

  onSubmit(){
    this.authService.login(this.form).subscribe({
      next: (data) =>  {
        console.log(data);
      },
      error: (err) => {

        console.log(err);

        this.dialog.open(
          ErrorDialogComponent, { data : { message: err.error.statusMessage}}
        )
      }
    })
  }
}
