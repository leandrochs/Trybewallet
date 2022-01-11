// Esse reducer será responsável por tratar as informações da pessoa usuária

import { USER } from '../actions';

const initialState = { email: '' };

function userReducer(state = initialState, action) {
  switch (action.type) {
  case USER:
    return { ...state, email: action.value };
  default:
    return state;
  }
}

export default userReducer;
