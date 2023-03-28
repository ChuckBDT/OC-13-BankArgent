import { createSlice } from "@reduxjs/toolkit";
import { userLogin } from "./authActions";

const userToken = localStorage.getItem("userToken")
  ? localStorage.getItem("userToken")
  : null;

const initialState = {
  loading: false,
  details: null,
  userInfos: {
    status: 0,
    message: null,
    body: {
      id: null,
      email: null,
    },
  },
  userToken,
  error: null,
  success: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: () => {
      localStorage.clear();
      return initialState;
    },
    setUserInfos: (state, { payload }) => {
      state.userInfos = payload;
    },
  },
  extraReducers: {
    [userLogin.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [userLogin.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.details = payload;
      state.userToken = payload.userToken;
      state.success = true;
    },
    [userLogin.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

export const { logout, setUserInfos } = authSlice.actions;
export default authSlice.reducer;
