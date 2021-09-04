import { routerReducer } from "react-router-redux";
import { combineReducers } from "redux";
import viewport from "modules/viewport";

export default combineReducers({
  router: routerReducer,
  viewport,
});
