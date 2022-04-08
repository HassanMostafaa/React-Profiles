import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { rootReducers } from "./rootReducers";
import logger from "redux-logger";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";

const middleWare = applyMiddleware(logger, thunk, promise);

export const store = createStore(rootReducers, composeWithDevTools(middleWare));
