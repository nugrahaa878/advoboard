import { bestSelling30Days, bestSelling7Days, bestSellingCustom, bestSellingThisMonth, bestSellingYesterday, dummyBestSelling } from "../../data/item";
import { SET_DATA_SKU } from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  rangeType: 'yesterday',
  bestSelling: {
    yesterday: bestSellingYesterday,
    seven: bestSelling7Days,
    thirty: bestSelling30Days,
    month: bestSellingThisMonth,
    custom: bestSellingCustom,
  },
  selectedData: bestSellingYesterday
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