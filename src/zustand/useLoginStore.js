import { create } from "zustand";
import { persist } from "zustand/middleware";
import userAPI from "../api/user.api";
import LocalStorage, { KEY } from "../utils/LocalStorage";

const useLoginStore = create(
  persist(
    (set) => ({
      user: null,
      logIn: (state) =>
        set(() => {
          const token = state.accessToken;
          LocalStorage.set(KEY._03_ACCESS_TOKEN, token);
          userAPI.setAcessToken(token);
          return { user: state };
        }),
      logOut: () =>
        set(() => {
          LocalStorage.set(KEY._03_ACCESS_TOKEN, "");
          userAPI.setAcessToken("");
          return { user: null };
        }),
    }),
    {
      name: "loginStore",
    }
  )
);

export default useLoginStore;
