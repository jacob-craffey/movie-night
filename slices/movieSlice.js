import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    addMovie: (state, action) => {
      if (state.items.length >= 2) return;
      state.items = [...state.items, action.payload];
    },
    removeMovie: (state, action) => {
      const index = state.items.findIndex(
        (movie) => movie.id === action.payload
      );
      let newBasket = [...state.items];

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Cannot remove product (id: ${action.payload.id} as it's not in the basket)`
        );
      }

      state.items = newBasket;
    },
  },
});

export const { addMovie, removeMovie } = movieSlice.actions;
export const selectItems = (state) => state.movie.items;
export const selectTotal = (state) =>
  state.movie.items.reduce((total, item) => total + item.price, 0);

export default movieSlice.reducer;
