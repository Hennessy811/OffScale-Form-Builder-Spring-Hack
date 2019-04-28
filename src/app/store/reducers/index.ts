import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import {
  activeSocialReducer,
  backgroundReducer,
  constructorGeneralReducer,
  socialsReducer,
  userReducer
} from './constructor.reducer';
import {IContestGeneral, IGeneralSocial, ISocialItem, IUser} from '../../models/contest-general.model';

export interface State {
  activeBg: string;
  contestGeneral: IContestGeneral;
  socials: IGeneralSocial[];
  activeSocials: ISocialItem[];
  user: IUser;
}

export const reducers: ActionReducerMap<State> = {
  activeBg: backgroundReducer,
  contestGeneral: constructorGeneralReducer,
  socials: socialsReducer,
  activeSocials: activeSocialReducer,
  user: userReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
