import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import UserSlice from "./UserSlice/UserSlice";
import FriendsSlice from "./FriendsSlice/FriendsSlice";
export const store = configureStore({
  reducer: {
    user: UserSlice,
    friends: FriendsSlice,
  },
  middleware: [
    ...getDefaultMiddleware({
      serializableCheck: false,
    }),
  ],
});
