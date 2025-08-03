import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [], // Initial items in the cart
  },
  reducers: {
    addItem: (state, action) => {
      // vanila (older) redux => DO NOT MUTATE THE STATE DIRECTLY
      // Instead, return a new state object
      //   const newState = { ...state };
      //   newState.items.push(action.payload);
      //   return newState;

      // Redux Toolkit allows you to write "mutating" logic in reducers
      // which is actually using the Immer library under the hood.
      // This means you can write code that "mutates" the state,
      // but it will not actually mutate the state in the Redux store.
      // RTK will handle the immutability for you.
      // This is the recommended way to update state in Redux Toolkit
      // Alternatively, you can directly mutate the state in Redux Toolkit
      // RTK either mutates the state directly or returns a new state object
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
    clearCart: (state) => {
      state.items.length = 0; // Clear the cart by setting length to 0

      // return {items: []}; // Return a new state object with an empty items array
      // Alternatively, you can also use:
      // state.items = []; // This also works to clear the cart
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
