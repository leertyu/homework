export class QuestionModel {
  questionCategoryId: string;
  title: string;
  totalQuestion: number;
  level: string;
  timeLimitOfMinuteUnit: number;
  questionInfo: QuestionInfoModel;

  constructor(){
    this.questionCategoryId = '';
    this.title = '';
    this.totalQuestion = 0;
    this.level = '';
    this.timeLimitOfMinuteUnit = 0;
    this.questionInfo = new QuestionInfoModel();
  }
}

export class QuestionInfoModel {
  questionId: string;
  sequence: number;
  tilte: string;
  questionAnswerInfo: AnswerModel;

  constructor(){
    this.questionId = '';
    this.sequence = 0;
    this.tilte = '';
    this.questionAnswerInfo = new AnswerModel();
  }
}

export class AnswerModel {
  questionAnswerId: string;
  sequence: number;
  answer: string;

  constructor(){
    this.questionAnswerId = '';
    this.sequence = 0;
    this.answer = '';
  }
}

