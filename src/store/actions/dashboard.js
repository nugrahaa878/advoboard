import { 
  SET_DATA_SKU,
  SET_DATA_COMPETITOR
} from "./actionTypes";

export const setDataSku = (dataSku) => {
  return (dispatch) => {
    dispatch({
      type: SET_DATA_SKU,
      payload: dataSku,
    });
  };
};

export const setDataCompetitor = (dataCompetitor) => {
  return (dispatch) => {
    dispatch({
      type: SET_DATA_COMPETITOR,
      payload: dataCompetitor,
    });
  };
};