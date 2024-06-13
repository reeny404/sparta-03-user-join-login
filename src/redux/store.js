import { configureStore } from "@reduxjs/toolkit";
import spendingsReducer from "./reducers/spendings.reducer";

const store = configureStore({
  reducer: {
    spendings: spendingsReducer,
  },
});

export default store;
