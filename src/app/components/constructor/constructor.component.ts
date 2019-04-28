import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDrawer} from '@angular/material';
import {Store} from '@ngrx/store';
import {AddSocial, RemoveSocial, SetBackground, SetTitleDescr} from '../../store/actions/constructor.actions';
import {Observable} from 'rxjs';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {IContestGeneral, IGeneralSocial, ISocialItem, IUser} from '../../models/contest-general.model';
import {v4 as uuid} from 'uuid';
import {Router} from '@angular/router';

@Component({
  selector: 'app-constructor',
  templateUrl: './constructor.component.html',
  styleUrls: ['./constructor.component.sass']
})
export class ConstructorComponent implements OnInit {

  editMode = false;
  contestForm = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
  });
  socialsGroup = this.fb.group({
    ig: [''],
    twitter: [''],
    vk: [''],
    youtube: [''],
    twich: [''],
    sig: [''],
    stwitter: [''],
    svk: [''],
    syoutube: [''],
    stwich: [''],
    custom: [''],
    scustom: ['']
  });
  $contestTitle: Observable<IContestGeneral> = this.store.select('contestGeneral');
  $activeBackground: Observable<string> = this.store.select('activeBg');
  $socials: Observable<IGeneralSocial[]> = this.store.select('socials');
  $activeSocials: Observable<ISocialItem[]> = this.store.select('activeSocials');
  $user: Observable<IUser> = this.store.select('user');
  // TODO paste from clipboard
  backgroundSource = [
    'https://images.unsplash.com/photo-1553201108-3cb4c5a04302?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80',
    'https://images.unsplash.com/photo-1553220662-80ea124f122f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80',
    'https://images.unsplash.com/photo-1553190781-4490b9b6d06b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80',
    'https://images.unsplash.com/photo-1553134504-2b6a393f2aab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80'
  ];
  JSON_EXAMPLE = {
    tablename: 'Test',
    input: [
      {
        name: 'name', type: 'text'
      },
      {
        name: 'mail', type: 'text'
      },
      {
        name: 'password', type: 'text'
      }
    ]
  };

  // TODO clear selection
  @ViewChild(MatDrawer) private drawer: MatDrawer;

  constructor(
    private store: Store<any>,
    private fb: FormBuilder,
    private router: Router
  ) {
  }

  remove_key_from_local_storage(a_key) {
    localStorage.removeItem(a_key);
  }

  clear_local_storage() {
    localStorage.clear();
  }

  save_at_local_storage(a_key, a_text) {
    localStorage.setItem(a_key, a_text);
  }

  get_from_local_storage(a_key) {
    // alert(localStorage.getItem(a_key));
    return localStorage.getItem(a_key);
  }

  generateSQL(a_form_json) {
    let l_sql_code;
    const l_form_json = JSON.parse(a_form_json);
    l_sql_code = 'CREATE TABLE ' + l_form_json.tablename + '( ';
    for (const key in l_form_json.input) {
      if (l_form_json.input.hasOwnProperty(key)) {
        l_sql_code = l_sql_code + l_form_json.input[key].name + ' varchar(256), ';
      }
    }
    l_sql_code = l_sql_code + ' id integer PRIMARY KEY);';
    // alert(sql_code);
    return l_sql_code;
  }

  ngOnInit() {
    this.setBackground(this.backgroundSource[3]);
  }

  goTo(url) {
    window.open(url, '_blank');
  }

  formUpdater() {
    const payload: IContestGeneral = {
      title: this.contestForm.value.title,
      description: this.contestForm.value.description
    };

    this.store.dispatch(new SetTitleDescr(payload));
  }

  toggleEditor() {
    this.editMode = !this.editMode;
    this.drawer.toggle();
  }

  createContest() {
    const task = {
      user: {},
      bg: '',
      socials: [],
      titles: {}
    };
    const subs = [
      this.$activeSocials.subscribe(res => task.socials = res),
      this.$activeBackground.subscribe(res => task.bg = res),
      this.$contestTitle.subscribe(res => task.titles = res)
    ];

    subs.forEach(item => item.unsubscribe());
    console.log(task);
    // this.router.navigate(['']);
  }

  setTask(value, event) {
    console.log(this.socialsGroup);

    if (value && event) {
    } else {
      // todo remove task
    }
  }

  removeTask(id) {
    this.store.dispatch(new RemoveSocial(id));
  }

  addOption(s: IGeneralSocial) {
    const value = s.value;
    const select = this.socialsGroup.controls['s' + value].value;
    const input = this.socialsGroup.controls[value].value;
    console.log(select, input);

    if (select && input) {
      const id = uuid();
      const task: ISocialItem = {
        id,
        action: select,
        type: {
          title: s.title,
          logo: s.logo,
          actionTypes: [select],
          value
        },
        isValidating: true,
        URL: input
      };
      console.log(task);
      this.store.dispatch(new AddSocial(task));
    }
  }


  setBackground(image) {
    this.store.dispatch(new SetBackground(image));
  }
}
