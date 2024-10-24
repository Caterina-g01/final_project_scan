import { configureStore } from "@reduxjs/toolkit";
import publicationsReducer from "./publicationsSlice";
import userReducer from "./userSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    publications: publicationsReducer,
  },
});

export default store;
