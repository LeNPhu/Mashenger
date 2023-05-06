import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import UserSlice from "./UserSlice/UserSlice";
import FriendsSlice from "./FriendsSlice/FriendsSlice";
import ChatSlice from "./ChatSlice/ChatSlice";
export const store = configureStore({
  reducer: {
    user: UserSlice,
    friends: FriendsSlice,
    chat: ChatSlice,
  },
  middleware: [
    ...getDefaultMiddleware({
      serializableCheck: false,
    }),
  ],
});
