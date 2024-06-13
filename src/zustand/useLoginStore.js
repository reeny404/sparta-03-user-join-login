import { create } from "zustand";
import { persist } from "zustand/middleware";

const useLoginStore = create(
  persist(
    (set) => ({
      user: null,
      logIn: (state) => set({ user: state.user }),
      logOut: () => set({ user: null }),
    }),
    {
      name: "login-store",
    }
  )
);

export default useLoginStore;
