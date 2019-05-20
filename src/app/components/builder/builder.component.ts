import { Component, OnInit } from '@angular/core';
import {QuestionService} from '../../core/services/question.service';

@Component({
  selector: 'app-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.sass'],
  providers:  [ QuestionService ]
})
export class BuilderComponent implements OnInit {
  questions: any[];

  constructor(private service: QuestionService) {
    this.questions = service.getQuestions();
  }

  updateQuestions() {
    this.questions = [...this.service.getQuestions()];
  }

  remove(event) {
    this.service.removeQuestion(event);
    this.updateQuestions();
  }

  onImport(event) {
    this.service.clear();
    event.forEach(item => {
      switch (item.controlType) {
        case 'dropdown':
          this.service.addQuestion('select', item);
          break;
        case 'textbox':
          this.service.addQuestion('text', item);
          break;
        default:
          console.log('Error importing form data');
          break;
      }
    });
    this.updateQuestions();
  }

  addText(event) {
    this.service.addQuestion('text', event);
    this.updateQuestions();
  }

  addSelect(event) {
    this.service.addQuestion('select', event);
    this.updateQuestions();
  }

  ngOnInit() {
  }
}
