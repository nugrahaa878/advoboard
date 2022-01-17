const initialState = {
  isLoading: false,
  listBook: {},
  countries: {},
  error: null
}

const dashboardReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  };
};

export default dashboardReducer;