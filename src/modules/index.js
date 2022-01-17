import { combineReducers } from 'redux';
import dashboardReducer from '../store/reducers/dashboard';

const createRootReducer = () => 
  combineReducers({
    dashboard: dashboardReducer,
  });

export default createRootReducer;