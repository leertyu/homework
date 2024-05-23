import { Component } from '@angular/core';
import { UserModel } from '../../models/user-model';
import { AuthService } from '../../services/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from '../error-dialog/error-dialog.component';
import { Router } from '@angular/router';
import { LocalStorageService } from '../../services/local-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  form = new UserModel();

  constructor(private authService: AuthService, private dialog: MatDialog, private router: Router, private localStorageService: LocalStorageService) {}

  onSubmit(){
    this.authService.login(this.form).subscribe({
      next: (data) =>  {
        this.localStorageService.setItem('USER', JSON.stringify(data.data));
        this.router.navigate(['/categories'])
      },
      error: (err) => {
        this.dialog.open(
          ErrorDialogComponent, { data : { message: err.error.statusMessage}}
        )
      }
    })
  }
}
