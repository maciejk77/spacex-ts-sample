import { Action, ActionTypes, Rocket } from './../actions';

export const rocketsReducer = (state: Rocket[] = [], action: Action) => {
  switch (action.type) {
    case ActionTypes.fetchRockets:
      return action.payload;
    case ActionTypes.deleteRocket:
      return state.filter((rocket: Rocket) => rocket.id !== action.payload);
    default:
      return state;
  }
};
