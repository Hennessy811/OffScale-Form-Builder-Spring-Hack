import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-available-inputs-box',
  templateUrl: './available-inputs-box.component.html',
  styleUrls: ['./available-inputs-box.component.sass']
})
export class AvailableInputsBoxComponent implements OnInit {

  @Output() addText = new EventEmitter();
  @Output() addSelect = new EventEmitter();

  select = 'text';

  textTypes = [
    'text',
    'email',
    'password',
    'number'
  ];

  selectFieldInfo = {
    label: '',
    key: '',
    required: false,
    value: '',
    options: []
  }

  textFieldInfo = {
    label: '',
    type: '',
    key: '',
    value: '',
    required: false
  };

  selectNewOption = '';

  constructor() { }

  ngOnInit() {
  }

  addOption() {
    this.selectFieldInfo.options.push({key: this.selectNewOption,  value: this.selectNewOption});
    this.selectNewOption = '';
  }

  addTextField() {
    this.addText.emit(this.textFieldInfo);
  }

  addSelectField() {
    this.addSelect.emit(this.selectFieldInfo);
  }

}
