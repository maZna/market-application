import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducerMap from "./reducers";
import middleware from "./middleware";

export default createStore(
  combineReducers({
    ...reducerMap,
  }),
  composeWithDevTools(applyMiddleware(middleware))
);
