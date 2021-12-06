import { configureStore } from "@reduxjs/toolkit";
import adminReducer from "./pages/profile/adminUser.slice";

const store = configureStore({
  reducer: {
    admin: adminReducer,
  },
});

export default store;
