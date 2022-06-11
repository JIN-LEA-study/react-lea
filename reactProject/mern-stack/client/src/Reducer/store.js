import { configereStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";

export default configereStore({
  reducer: {
    user: userSlice,
  },
});
