import { Component } from '@angular/core';
import { QuestionService } from '../../../services/question.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent {
  constructor(private questionService: QuestionService){

  }

  ngOnInit(){
    this.questionService.getCategories().subscribe({
      next: (data) =>  {
        console.log(data);
      },
      error: (err) => {
      }
    })
  }
}
