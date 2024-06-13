import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./reducers/auth.reducer";
import spendingsReducer from "./reducers/spendings.reducer";

const store = configureStore({
  reducer: {
    spendings: spendingsReducer,
    auth: authReducer,
  },
});

export default store;
