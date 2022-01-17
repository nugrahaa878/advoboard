import { dummyBestSelling } from "../../data/item";

const initialState = {
  bestSelling: dummyBestSelling,
}

const dashboardReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  };
};

export default dashboardReducer;