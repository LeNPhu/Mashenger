import { createSlice } from "@reduxjs/toolkit";
import { getFriends } from "../../util/firebase/firestore";

const initialState = {
  friend: [],
  lastMessage: "",
  isLoading: false,
};
const FriendsSlice = createSlice({
  name: "friends",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getFriends.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getFriends.fulfilled, (state, action) => {
        state.isLoading = false;
        state.friend = action.payload;
        console.log(action.payload);
      })
      .addCase(getFriends.rejected, (state) => {
        state.isLoading = false;
      });
  },
});
export default FriendsSlice.reducer;
