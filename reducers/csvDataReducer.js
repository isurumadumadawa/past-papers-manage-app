import {LOAD_READ_CSV, SUCCESS_READ_CSV, ERROR_READ_CSV} from '../constants';

const initialState = {
  loading: true,
  data: {},
  error: null,
};

const csvDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_READ_CSV:
      return {
        ...state,
        loading: true,
      };
    case SUCCESS_READ_CSV:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: null,
      };
    case ERROR_READ_CSV:
      return {
        ...state,
        loading: false,
        data: {},
        error: action.payload,
      };
    default:
      return state;
  }
};

export default csvDataReducer;
