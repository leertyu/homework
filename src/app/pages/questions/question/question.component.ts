import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionService } from '../../../services/question.service';
import { LocalStorageService } from '../../../services/local-storage.service';
import { FormBuilder, Validators, FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrl: './question.component.css'
})
export class QuestionComponent {

  questionInfo: any;

  constructor(private questionService: QuestionService, private router: Router, private localStorageService: LocalStorageService, private formBuilder: FormBuilder){ }

  ngOnInit(){
    const categoryId = this.localStorageService.getItem('QUESTION');
    const categoryIdParse = categoryId !== null ? categoryId : '';
    this.questionService.getCategoriesDetail(categoryIdParse).subscribe({
      next: (data) =>  {
       console.log(data);
       this.questionInfo = data.data.questionInfo;
      },
      error: (err) => {
      }
    })
  }

  onSubmit(){

  }
}
