import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  friend: [],
  lastMessage: "",
  isLoading: false,
};
const FriendsSlice = createSlice({
  name: "friends",
  initialState,
  reducers: {},
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(getFriends.pending, (state) => {
  //       state.isLoading = true;
  //     })
  //     .addCase(getFriends.fulfilled, (state, action) => {
  //       state.isLoading = false;
  //       state.friend = action.payload;
  //       console.log(action);
  //     })
  //     .addCase(getFriends.rejected, (state) => {
  //       state.isLoading = false;
  //     });
  // },
});
export default FriendsSlice.reducer;
