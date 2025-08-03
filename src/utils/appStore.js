import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice"; // Import the cart reducer

// Configure your store here, e.g., adding reducers, middleware, etc.
const appStore = configureStore({
  reducer: {
    cart: cartReducer, // Add the cart reducer to the store
  },
});

export default appStore;
