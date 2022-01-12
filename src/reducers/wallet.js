// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { DELETE_LINE, INITIALS, WALLET } from '../actions';

const initialState = { currencies: [], expenses: [] };

function walletReducer(state = initialState, action) {
  switch (action.type) {
  case WALLET:
    return { ...state, expenses: [...state.expenses, action.value] };
  case INITIALS:
    return { ...state, currencies: action.value };
  case DELETE_LINE:
    return {
      ...state,
      expenses: state.expenses.filter(({ id }) => id !== action.value),
    };
  default:
    return state;
  }
}

export default walletReducer;
