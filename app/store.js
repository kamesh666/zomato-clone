import { combineReducers, configureStore } from "@reduxjs/toolkit";
import restaurantReducer from "../slices/restaraurantSlice";
import basketReducer from "../slices/basketSlice";

const reducer = combineReducers({
  restaurant: restaurantReducer,
  basket: basketReducer,
});

export const store = configureStore({
  reducer,
});
