export interface IContestGeneral {
  title: string;
  description: string;
}

export interface IUser {
  name: string;
  info: {
    banner: string;
    profile_picture: string;
  };
}

export interface ISocialItem {
  id: string;
  type: IGeneralSocial;
  action: ISocialAction[];
  URL: string;
  isValidating: boolean;
}

export interface IGeneralSocial {
  title?: string;
  actionTypes: Array<string>;
  logo?: string;
  value: string;
}

export interface ISocialAction {
  type: string;
  URL: string;
}
