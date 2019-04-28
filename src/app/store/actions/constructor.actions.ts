import { Action } from '@ngrx/store';
import {IContestGeneral, ISocialItem, IUser} from "../../models/contest-general.model";

export enum ConstructorActionTypes {
  LoadConstructors = '[Constructor] Load Constructors',
}

export class LoadConstructors implements Action {
  readonly type = ConstructorActionTypes.LoadConstructors;
}

// Set background ------------------
export enum ConstructorBackgroundSetup {
  Change = '[Constructor] Setup background'
}

export class SetBackground implements Action {
  readonly type = ConstructorBackgroundSetup.Change;

  // Gets URL of image
  constructor(public payload: string) {
  }
}
// Set background ------------------

// Set Title & Description ---------
export enum ConstructorFormSetup {
  Change = '[Constructor] Setup title & description'
}

export class SetTitleDescr implements Action {
  readonly type = ConstructorFormSetup.Change;

  constructor(public payload: IContestGeneral) {
  }
}
// Set Title & Description ---------

// Set socials ---------------------
export enum SocialsActions {
  Add = '[Constructor] Setup new social',
  Remove = '[Constructor] Delete social'
}

export class AddSocial implements Action {
  readonly type = SocialsActions.Add;

  constructor(public payload: ISocialItem) {
  }
}

export class RemoveSocial implements Action {
  readonly type = SocialsActions.Remove;

  constructor(public payload: string) {
  }
}
// Set socials ---------------------

export enum UserActions {
  SUCCESS = '[Constructor] Receieved user info'
}

export class GetUser implements Action {
  readonly type = UserActions.SUCCESS;

  constructor(public payload: IUser) {
  }
}

export type ConstructorActions =
  LoadConstructors
  | SetBackground
  | SetTitleDescr
  | RemoveSocial
  | AddSocial
  | GetUser;
