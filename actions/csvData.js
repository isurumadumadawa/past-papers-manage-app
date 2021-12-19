import {LOAD_READ_CSV, SUCCESS_READ_CSV, ERROR_READ_CSV} from '../constants';

import {readCSV} from '../adapters';

const loadReadCsv = () => {
  return {
    type: LOAD_READ_CSV,
  };
};

const successReadCsv = data => {
  return {
    type: SUCCESS_READ_CSV,
    payload: data,
  };
};

const errorReadCsv = error => {
  return {
    type: ERROR_READ_CSV,
    payload: error,
  };
};

export const onReadCsv = fileName => {
  return async dispatch => {
    // dispatch(loadReadCsv);
    // const {data, headers, error} = await readCSV(fileName);
    // if (data && headers) dispatch(successReadCsv({headers, values: data}));
    // if (error) dispatch(errorReadCsv(error));
  };
};
