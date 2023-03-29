import { createSlice } from "@reduxjs/toolkit";
import { userLogin } from "./authActions";

const initialState = {
  loading: false,
  logDetails: null,
  userInfos: null,
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
      state.logDetails = payload;
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
