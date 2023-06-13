import { createStore } from "redux";
import { bookingReducer } from "./bookingReducer/boookingReducer";
import { composeWithDevTools } from "@redux-devtools/extension";
export const store = createStore(bookingReducer, composeWithDevTools());
