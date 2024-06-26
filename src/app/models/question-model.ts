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

export class QuestionSubmitModel {
  questionCategoryId: string;
  questions: AnswerSubmitModel[];

  constructor(){
    this.questionCategoryId = '';
    this.questions = [];
  }
}

export class AnswerSubmitModel {
  questionId: string;
  answers: AnswerDetailSubmitModel[];

  constructor(){
    this.questionId = '';
    this.answers = [];
  }
}

export class AnswerDetailSubmitModel {
  questionAnswerId: string;

  constructor(){
    this.questionAnswerId = '';
  }
}

export class PepareAnswerSubmitModel {
  questionId: string;
  questionAnswerId: string;

  constructor(){
    this.questionId = '';
    this.questionAnswerId = '';
  }
}





