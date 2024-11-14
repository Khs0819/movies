import { createStore, applyMiddleware } from "redux";
import { moviesReducer } from "../reducers/moviesReducer.js";
import { thunk } from "redux-thunk";

export const store = createStore(moviesReducer, applyMiddleware(thunk));
