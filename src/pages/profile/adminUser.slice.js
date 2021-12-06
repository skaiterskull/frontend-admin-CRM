import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isLoading: false,
  isAuth: false,
  response: {},
  adminProfile: {},
};

const adminUserSlice = createSlice({
  name: "adminUser",
  initialState,
  reducers: {
    isPending: (state) => {
      state.isLoading = true;
    },

    requestSuccess: (state) => {
      state.isLoading = false;
    },

    getProfileSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.adminProfile = payload;
    },

    adminLoggedIn: (state) => {
      state.isLoading = false;
      state.isAuth = true;
    },

    adminLoggedOut: (state) => {
      state.isAuth = false;
    },

    requestFailed: (state) => {
      state.isLoading = false;
    },
  },
});

const { actions, reducer } = adminUserSlice;

export const {
  isPending,
  requestSuccess,
  getProfileSuccess,
  requestFailed,
  adminLoggedIn,
  adminLoggedOut,
} = actions;

export default reducer;
