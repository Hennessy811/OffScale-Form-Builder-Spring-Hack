import { Injectable }       from '@angular/core';
import {QuestionBase} from '../shared/question-base';
import {DropdownQuestion} from '../shared/question-dropdown';
import {TextboxQuestion} from '../shared/question-textbox';


@Injectable()
export class QuestionService {

  questions: QuestionBase<any>[] = [
  ];

  // TODO: get from a remote source of question metadata
  // TODO: make asynchronous
  getQuestions() {
    return this.questions;
  }

  clear() {
    this.questions = [];
  }

  addQuestion(type: 'text' | 'select', question) {
    switch (type) {
      case 'select':
        this.questions.push(new DropdownQuestion(question));
        break;
      case 'text':
        this.questions.push(new TextboxQuestion(question));
        break;
      default:
        break;
    }
  }

  removeQuestion(event) {
    this.questions = [...this.questions.filter(item => item.key !== event)];
  }
}
