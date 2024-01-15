import { configureStore } from "@reduxjs/toolkit";
import activeLinksSlice from "./slices/activeLinksActive";

const store = configureStore({
  reducer: {
    activeLinks: activeLinksSlice.reducer,
  },
});

export default store;
