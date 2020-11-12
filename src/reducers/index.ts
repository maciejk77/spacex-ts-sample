import { combineReducers } from 'redux';
import { rocketsReducer } from './rocketsReducer';
import { Rocket } from '../actions';

export interface StoreState {
  rockets: Rocket[];
}

export const reducers = combineReducers({
  rockets: rocketsReducer,
});
