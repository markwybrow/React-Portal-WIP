import { FETCH_ACTION, RECEIVE_ACTION } from '../actions/actionTypes';

import initialState from './initialState';

console.log('initialState: ', initialState);

export default function actions(state = initialState.action, action) {
  let newState;
  switch (action.type) {
    case FETCH_ACTION:
      console.log('FETCH_ACTIONS action:: ', action);
      return action;
    case RECEIVE_ACTION:
          newState = action.action;
      console.log('RECEIVE_ACTIONS action:: ', newState);
      return newState;
    default:
    console.log("state");
      return state;
  }
}
