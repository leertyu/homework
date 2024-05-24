import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionService } from '../../../services/question.service';
import { LocalStorageService } from '../../../services/local-storage.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})

export class CategoriesComponent {

  categories: any;

  constructor(private questionService: QuestionService, private router: Router, private localStorageService: LocalStorageService){

  }

  ngAfterContentInit(){
    this.questionService.getCategories().subscribe({
      next: (data) =>  {
        this.categories = data.data;
      },
      error: (err) => {
      }
    })
  }

  onSelectCategory(categoryId: string){
    this.localStorageService.setItem('QUESTION', categoryId);
    this.router.navigate(['/question'])
  }
}
