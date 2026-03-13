import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../cartSlice";

const appStore = configureStore({
  reducer: {
    //This is app reducer used to modify app store
    cart: cartReducer,
  },
});

export default appStore;
