import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { rootReducers } from "./rootReducers";
// import logger from "redux-logger";
import thunk from "redux-thunk";

const middleWare = applyMiddleware(thunk);

export const store = createStore(rootReducers, composeWithDevTools(middleWare));
