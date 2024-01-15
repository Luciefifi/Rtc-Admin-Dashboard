import { createSlice } from "@reduxjs/toolkit";

const activeLinksSlice = createSlice({
  name: "activeLinks",
  initialState: {
    active: null,
  },
  reducers: {
    setActiveLink(state, action) {
      state.active = action.payload;
    },
  },
});

export const activeLinksActions = activeLinksSlice.actions;
export default activeLinksSlice;
