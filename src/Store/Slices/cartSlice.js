import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
};

// create cart slice
const cartSlice = createSlice({
  name: "cart",
  initialState,
  // actions
  reducers: {
    clear: (state) => {
      state.list = [];
    },
    removeItem: (state, action) => {
      state.list = state.list.filter((e) => {
        // if the item was in cart
        if (e.id === action.payload) {
          e.quantity = e.quantity - 1;
          if (e.quantity === 0) {
            return false; // delete item when the count be zero
          }
          return e; //return the new item (items was changed his count)
        }
        return true; // put item in his place
      });
    },
    addItem: (state, action) => {
      let add = false;
      state.list = state.list.map((e) => {
        // if items was in the cart
        if (e.id === action.payload.id) {
          e.quantity = e.quantity + 1;
          return e; //return the new item (items was changed his count)
        }
        return e; // put item in his place
      });
      // if item not in cart then add it in the cart list
      if (!add) {
        state.list.push({ ...action.payload, quantity: 1 });
      }
    },
  },
});
export const { clear, removeItem, addItem } = cartSlice.actions;
export default cartSlice.reducer;
// export the all we need
