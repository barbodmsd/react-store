import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null,
};
// create auth slice
const authSlice = createSlice({
  name: "auth",
  initialState,
  // actions
  reducers: {
    login: (state, action) => {
      state.token = action.payload;
    },
    logout: (state,action) => {
      state.token = action.payload;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;

// export the all we need
