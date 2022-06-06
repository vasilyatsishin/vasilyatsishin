import { combineReducers, applyMiddleware, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import resumeReduser from "./reducers/resumeReducer";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import registrationReducer from "./reducers/registrationReducer";

const rootReducer = combineReducers({
  resumeReducer: resumeReduser,
  registrationReducer: registrationReducer,
});

const composeEnhancers = composeWithDevTools({
  trace: true,
  traceLimit: 25,
});

const store = legacy_createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
