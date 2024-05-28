import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { LocalStorageService } from '../../services/local-storage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  name: string = '';

  constructor(private router: Router, private localStorageService: LocalStorageService){ }

  ngOnInit(){
    const user = this.localStorageService.getItem('USER');
    const userInfo = user !== null ? JSON.parse(user) : '';
    this.name = userInfo.fullName;
  }

  gotoCategories(){
    this.localStorageService.removeItem("QUESTION");
    this.localStorageService.removeItem("SCORE");
    this.router.navigate(['/categories'])
  }

  onLogout(){
    this.localStorageService.clear();
    this.router.navigate(['/login'])
  }
}
