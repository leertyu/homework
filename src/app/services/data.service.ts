import { QuestionInfoModel, QuestionModel } from './../models/question-model';
import { Injectable, signal } from '@angular/core';
import { CategoryModel } from '../models/category-model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  questions = signal<QuestionModel>({
    questionCategoryId: '',
    title: '',
    totalQuestion: 0,
    level: '',
    timeLimitOfMinuteUnit: 0,
    questionInfo: new QuestionInfoModel()
  })
}
