import {
  ConstructorActions,
  ConstructorActionTypes,
  ConstructorBackgroundSetup,
  ConstructorFormSetup,
  SocialsActions,
  UserActions
} from '../actions/constructor.actions';
import {IContestGeneral, IGeneralSocial, ISocialItem, IUser} from '../../models/contest-general.model';

export interface State {

}

export const initialState: State = {
};

export const socialsInitial: IGeneralSocial[] = [
  {
    title: 'Simple Input',
    actionTypes: ['Plain text', 'Email'],
    logo: 'assets/logos/vk.png',
    value: 'vk'
  },
  {
    title: 'Select',
    actionTypes: ['simple', 'mutiselect'],
    logo: 'assets/logos/youtube.png',
    value: 'youtube'
  },
  {
    title: 'Checkbox',
    actionTypes: ['simple'],
    logo: 'assets/logos/instagram.png',
    value: 'ig'
  },
  {
    title: 'Datepicker',
    actionTypes: ['simple', 'date range'],
    logo: 'assets/logos/twich.png',
    value: 'twich'
  },
  {
    title: 'Radio',
    actionTypes: ['simple'],
    logo: 'assets/logos/twitter.png',
    value: 'twitter'
  },
  {
    title: 'Custom field',
    actionTypes: [],
    logo: 'https://banner2.kisspng.com/20171216/0a6/question-mark-png-5a352b58b02c08.4921308315134339447216.jpg',
    value: 'custom'
  }
];

export const currentSocialsInitial: ISocialItem[] = [];

export const generalInitial = {
  title: 'Form title example',
  description: 'Form description example. Enter here the main purpose of this form. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad, autem doloremque eaque excepturi id itaque magnam minima molestiae nam nihil officia.'
};

export const userInitialState: IUser = {
  info: {
    banner: 'https://images.unsplash.com/photo-1553600829-f2d6c758a053?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80',
    profile_picture: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
  },
  name: 'gkoch'
};

export function backgroundReducer(state = '', action: ConstructorActions): string {
  switch (action.type) {
    case ConstructorBackgroundSetup.Change: return action.payload;

    default: return state;
  }
}

export function reducer(state = initialState, action: ConstructorActions): State {
  switch (action.type) {

    case ConstructorActionTypes.LoadConstructors:
      return state;

    default:
      return state;
  }
}

export function constructorGeneralReducer(state: IContestGeneral = generalInitial,
                                          action: ConstructorActions): IContestGeneral {
  switch (action.type) {
    case ConstructorFormSetup.Change:
      return action.payload;
    default: return state;
  }
}

export function socialsReducer(state: IGeneralSocial[] = socialsInitial, action: ConstructorActions) {
  switch (action.type) {
    default: return state;
  }
}

export function activeSocialReducer(state = currentSocialsInitial, action: ConstructorActions) {
  switch (action.type) {
    case SocialsActions.Add: return [...state, action.payload];
    case SocialsActions.Remove: return state.filter(item => item.id !== action.payload);
    default: return state;
  }
}

export function userReducer(state = userInitialState, action: ConstructorActions) {
  switch (action.type) {
    case UserActions.SUCCESS: return state;
    default: return state;
  }
}
