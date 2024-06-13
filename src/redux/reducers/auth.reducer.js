import { createSlice } from "@reduxjs/toolkit";

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
      };
    },
    logOut: (state) => {
      state.user = null;
    },
  },
});

export const authReducer = authSlice.reducer;
export const { logIn, logOut } = authSlice.actions;
