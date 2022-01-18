import { 
  bestSellingYesterday 
} from "../../data/bestSelling";
import { bestCompetitorYesterday } from "../../data/competitor";

import { SET_DATA_COMPETITOR, SET_DATA_SKU } from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  bestSellingData: bestSellingYesterday,
  competitorData: bestCompetitorYesterday,
}

const dashboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATA_SKU:
      return updateObject(state, {bestSellingData: action.payload})
    case SET_DATA_COMPETITOR:
      return updateObject(state, {competitorData: action.payload})
    default:
      return state
  };
};

export default dashboardReducer;