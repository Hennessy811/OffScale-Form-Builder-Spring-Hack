import {Component, EventEmitter, Input, Output} from '@angular/core';
import { FormGroup }        from '@angular/forms';
import {QuestionBase} from '../../../core/shared/question-base';


@Component({
  selector: 'app-question',
  templateUrl: './dynamic-form-question.component.html',
  styleUrls: ['./dynamic-form-question.component.sass']
})

export class DynamicFormQuestionComponent {
  @Input() question: QuestionBase<any>;
  @Input() form: FormGroup;
  @Output() remove = new EventEmitter();

  get isValid() { return this.form.controls[this.question.key].valid; }
}
