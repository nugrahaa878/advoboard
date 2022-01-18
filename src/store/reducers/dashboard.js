import { 
  bestSelling30Days,
  bestSelling7Days, 
  bestSellingCustom, 
  bestSellingThisMonth, 
  bestSellingYesterday 
} from "../../data/item";

import { SET_DATA_SKU } from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  rangeType: 'yesterday',
  selectedData: bestSellingYesterday,
}

const dashboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATA_SKU:
      return updateObject(state, {selectedData: action.payload})
    default:
      return state
  };
};

export default dashboardReducer;