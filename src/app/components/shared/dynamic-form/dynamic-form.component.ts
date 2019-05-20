import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {FormGroup} from '@angular/forms';

import {QuestionControlService} from '../../../core/services/question-control.service';
import {QuestionBase} from '../../../core/shared/question-base';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import {DomSanitizer, SafeUrl} from '@angular/platform-browser';


@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.sass'],
  providers: [ QuestionControlService ]
})
export class DynamicFormComponent implements OnInit, OnChanges {

  constructor(private qcs: QuestionControlService,
              private sanitizer: DomSanitizer) {  }

  @Input() questions: QuestionBase<any>[] = [];
  @Output() remove = new EventEmitter();
  @Output() imported = new EventEmitter();

  private form: FormGroup;
  private downloadJsonHref: SafeUrl;

  onImport(event) {
    const file = event.srcElement.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsText(file, 'UTF-8');
      reader.onload = (evt) => {
        // @ts-ignore
        this.imported.emit(JSON.parse(evt.target.result));
      };
      reader.onerror = (evt) => {
        console.log('error reading file');
      };
    }
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.questions, event.previousIndex, event.currentIndex);
  }

  generateDownloadJsonUri() {
    const theJSON = JSON.stringify(this.questions);
    const blob = new Blob([theJSON], { type: 'text/json' });
    const url = window.URL.createObjectURL(blob);
    this.downloadJsonHref = this.sanitizer.bypassSecurityTrustUrl(url);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.form = this.qcs.toFormGroup(this.questions);
  }

  ngOnInit() {
  }

  onSubmit() {
  }
}
