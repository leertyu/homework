import { Component } from '@angular/core';
import { QuestionService } from '../../../services/question.service';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CategoryModel } from '../../../models/category-model';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})



export class CategoriesComponent {

  categories: any;

  constructor(private questionService: QuestionService){

  }

  ngOnInit(){
    this.questionService.getCategories().subscribe({
      next: (data) =>  {
        this.categories = data.data;
        console.log(data);
      },
      error: (err) => {
      }
    })
  }
}
