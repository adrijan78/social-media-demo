import { User } from "../models/User";
import { immer } from "zustand/middleware/immer";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface UserStore {
  users: User[];
  currentUser: User;
  setLoggedUser: (user: User) => void;
  logoutUser: () => void;
}

const store = immer((set: any) => ({
  users: [] as User[],
  currentUser: {} as User,
  ////Methods
  setLoggedUser: (user: User) => {
    set(
      (state: any) => {
        state.currentUser = user;
      },
      false,
      "setLoggedUser"
    );
  },
  logoutUser: () => {
    set(
      (state: any) => {
        localStorage.removeItem("usersStore");
        state.currentUser = null;
      },
      false,
      "logoutUser"
    );
  },
}));

export const useUsersStore = create<UserStore>()(
  devtools(persist(store, { name: "usersStore" }))
);
