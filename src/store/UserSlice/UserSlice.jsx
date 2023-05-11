import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import { firstTimeLogin } from "../../util/firebase/firestore";

const isRegistered = Cookies.get("isRegistered")
  ? Boolean(Cookies.get("isRegistered"))
  : false;
const user = JSON.parse(localStorage.getItem("user"))
  ? JSON.parse(localStorage.getItem("user"))
  : null;

const initialState = {
  user: user,
  isRegistered,
  isLoading: false,
  lastMessage: "Send a message!",
};

const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload));
      Cookies.set("isRegistered", true);
      state.isRegistered = true;
      firstTimeLogin(action.payload);
    },
    logout: (state) => {
      Cookies.remove("isRegistered");
      state.isRegistered = false;
      localStorage.removeItem("user");
      state.user = null;
    },
  },
});
export const { login, logout } = UserSlice.actions;
export default UserSlice.reducer;
