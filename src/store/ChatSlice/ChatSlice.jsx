import { createSlice } from "@reduxjs/toolkit";
import { getChat } from "../../util/firebase/firestore";

const initialState = {
  message: [],
  friend: {},
  chatId: "",
  isLoading: false,
};
const ChatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    changeFriend: (state, action) => {
      state.friend = action.payload;
      const user = JSON.parse(localStorage.getItem("user"))
        ? JSON.parse(localStorage.getItem("user"))
        : null;

      state.chatId =
        user.uid > action.payload.uid
          ? user.uid + action.payload.uid
          : action.payload.ui + user.uid;
      getChat(action.payload);
    },
  },
});
export const { changeFriend } = ChatSlice.actions;
export default ChatSlice.reducer;
