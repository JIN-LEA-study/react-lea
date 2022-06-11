import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    displayName: "",
    uid: "",
    accessToken: "",
  },
  reducers: {
    loginUser: (state, action) => {
      state.displayName = action.payload.displayName;
      state.uid = action.payload.uid;
      state.accessToken = action.payload.accessToken;
    },
    // user가 로그아웃을 하면 값을 비워줌
    clearUser: (state) => {
      state.displayName = "";
      state.uid = "";
      state.accessToken = "";
    },
  },
});

export const { loginUser, clearUser } = userSlice.actions;

export default userSlice.reducer;
