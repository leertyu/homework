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
import { PepareAnswerSubmitModel, QuestionSubmitModel } from '../../../models/question-model';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrl: './question.component.css'
})
export class QuestionComponent {

  answer = new QuestionSubmitModel();
  pepareAnswer: Array<PepareAnswerSubmitModel> = [];
  questionInfo: any;

  constructor(private questionService: QuestionService, private router: Router, private localStorageService: LocalStorageService, private formBuilder: FormBuilder){ }

  ngOnInit(){
    const categoryId = this.localStorageService.getItem('QUESTION');
    const categoryIdParse = categoryId !== null ? categoryId : '';
    this.answer.questionCategoryId = categoryIdParse;

    this.questionService.getCategoriesDetail(categoryIdParse).subscribe({
      next: (data) =>  {
       console.log(data);
       this.questionInfo = data.data.questionInfo;
      },
      error: (err) => {
      }
    })
  }

  onSelectAnswer(values:any, questionId: string, questionAnswerId: string){
    console.log(values.checked);
    console.log(questionId, questionAnswerId);
    if (values.checked){
      let data = new PepareAnswerSubmitModel();
      data.questionId = questionId;
      data.questionAnswerId = questionAnswerId;
      this.pepareAnswer.push(data);
    }
    else {
      this.pepareAnswer.splice(this.pepareAnswer.findIndex(x => x.questionId === questionId && x.questionAnswerId === questionAnswerId), 1);
    }
    this.onSubmit()
  }

  onSubmit(){
    console.log(this.answer);
    for(let item of this.questionInfo){
      console.log(item.questionId);
    }
  }
}
