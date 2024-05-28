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
import { AnswerDetailSubmitModel, AnswerSubmitModel, PepareAnswerSubmitModel, QuestionSubmitModel } from '../../../models/question-model';
import { Observable, interval } from 'rxjs';
import {map} from 'rxjs/operators'
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrl: './question.component.css'
})
export class QuestionComponent {

  answer = new QuestionSubmitModel();
  pepareAnswer: Array<PepareAnswerSubmitModel> = [];
  questionInfo: any;
  countdownSubscription!:any
  targetDay= Date.now()
  displayTime!:any
  tenupday: number = 0;
  tendownday: number = 0;
  upday: number = 0;
  downday: number = 0;
  tenuphour: number = 0;
  tendownhour: number = 0;
  uphour: number = 0;
  downhour: number = 0;
  tenupmin: number = 0;
  tendownmin: number = 0;
  upmin: number = 0;
  downmin: number = 0;
  tenupsec: number = 0;
  tendownsec: number = 0;
  upsec: number = 0;
  downsec: number = 0;
  countdownObs$!:Observable<string> //declare an observable

  constructor(private questionService: QuestionService, private router: Router, private localStorageService: LocalStorageService, private formBuilder: FormBuilder){ }

  ngOnInit(){
    const categoryId = this.localStorageService.getItem('QUESTION');
    const categoryIdParse = categoryId !== null ? categoryId : '';
    this.answer.questionCategoryId = categoryIdParse;

    this.questionService.getCategoriesDetail(categoryIdParse).subscribe({
      next: (data) =>  {
       this.questionInfo = data.data.questionInfo;
      },
      error: (err) => {
        this.localStorageService.clear();
        this.router.navigate(['/login'])
      }
    })

    this.countdownObs$= interval(1000).pipe(map(val =>this.countdownTimer(val)))
    this.countdownSubscription = interval(1000).subscribe(val => this.displayTime=this.countdownTimer(val));
  }

  ngOnDestroy(): void {
    this.countdownSubscription.unsubscribe();
  }

  countdownTimer(seconds: number) {
     const totalSeconds = Math.floor((this.targetDay + 602000 - Date.now()) / 1000);
     const days = Math.floor(totalSeconds / (60 * 60 * 24));
     const hours = Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60));
     const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
     const remainingSeconds = totalSeconds % 60;
     const formattedDays = days < 10 ? '0' + days : days;
     const formattedHours = hours < 10 ? '0' + hours : hours;
     const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
     const formattedSeconds = remainingSeconds < 10 ? '0' + remainingSeconds : remainingSeconds;
     if (totalSeconds == 0){

     }
     //day
     this.tenupday = Math.floor(days / 10);
     this.tendownday = Math.floor(days / 10);
     this.upday = days % 10;
     this.downday = days % 10;
     //hour
     this.tenuphour = Math.floor(hours / 10);
     this.tendownhour = Math.floor(hours / 10);
     this.uphour = hours % 10;
     this.downhour = hours % 10;
     //miniute
     this.tenupmin = Math.floor(minutes / 10);
     this.tendownmin = Math.floor(minutes / 10);
     this.upmin = minutes % 10;
     this.downmin = minutes % 10;
     //seccond
     this.tenupsec = Math.floor(remainingSeconds / 10);
     this.tendownsec = Math.floor(remainingSeconds / 10);
     this.upsec = remainingSeconds % 10;
     this.downsec = remainingSeconds % 10;
     return formattedDays+":"+formattedHours+":"+formattedMinutes+":"+formattedSeconds
  }

  onSelectAnswer(values:any, questionId: string, questionAnswerId: string){
    if (values.checked){
      let data = new PepareAnswerSubmitModel();
      data.questionId = questionId;
      data.questionAnswerId = questionAnswerId;
      this.pepareAnswer.push(data);
    }
    else {
      this.pepareAnswer.splice(this.pepareAnswer.findIndex(x => x.questionId === questionId && x.questionAnswerId === questionAnswerId), 1);
    }
  }

  onSubmit(){
    for(let item of this.questionInfo){
      let ansData = new AnswerSubmitModel();
      ansData.questionId = item.questionId;
      const result = this.pepareAnswer.filter(x => x.questionId === item.questionId);
      for(let ans of result){
        let ansDetail = new AnswerDetailSubmitModel();
        ansDetail.questionAnswerId = ans.questionAnswerId;
        ansData.answers.push(ansDetail);
      }
      this.answer.questions.push(ansData);
    }

    this.questionService.submitAnswer(this.answer).subscribe({
      next: (data) =>  {
       this.localStorageService.setItem('SCORE', JSON.stringify(data.data));
       this.router.navigate(['/score'])
      },
      error: (err) => {
        this.localStorageService.clear();
        this.router.navigate(['/login'])
      }
    })
  }
}
