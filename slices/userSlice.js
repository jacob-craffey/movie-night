import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {

    },
    removeUser: (state, action) => {
    },
  },
});

export const { addUser, removeUser } = userSlice.actions;
export const selectItems = (state) => state.user.items;

export default userSlice.reducer;
