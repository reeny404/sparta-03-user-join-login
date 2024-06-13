import { createSlice } from "@reduxjs/toolkit";
import userAPI from "../../api/user.api";

const authSlice = createSlice({
  initialState: { user: null },
  name: "auth",
  reducers: {
    logIn: (state, action) => {
      const user = action.payload;
      state.user = {
        id: user.id,
        nickname: user.nickname,
        avatar: user.avatar,
        accessToken: user.accessToken,
      };
      userAPI.setAcessToken(user.accessToken);
    },
    logOut: (state) => {
      state.user = null;
      userAPI.setAcessToken(null);
    },
  },
});

export const authReducer = authSlice.reducer;
export const { logIn, logOut } = authSlice.actions;
