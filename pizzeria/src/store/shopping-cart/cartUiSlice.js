
import { createSlice } from "@reduxjs/toolkit";

const cartUiSlice = createSlice({
  name: "cartUi",
  initialState: { cartIsVisible: false },

  // Recibe el estado actual y la funcion a realizar. Devuelve un nuevo estado
  reducers: {
    alternar(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
  },
});

export const cartUiActions = cartUiSlice.actions;
export default cartUiSlice;