import { FetchRocketsAction, DeleteRocketAction } from './rockets';

export enum ActionTypes {
  fetchRockets,
  deleteRocket,
}

export type Action = FetchRocketsAction | DeleteRocketAction;
