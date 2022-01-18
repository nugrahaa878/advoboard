import { SET_DATA_SKU } from "./actionTypes";

export const setDataSku = (dataSku) => {
  return (dispatch) => {
    dispatch({
      type: SET_DATA_SKU,
      payload: dataSku,
    });
  }
}