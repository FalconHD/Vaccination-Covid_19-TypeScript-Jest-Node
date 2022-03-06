import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "@/store";

// declaring the types for our state
type adminInfo = {
  cin: string;
  email: string;
  name: string;
  phone: string;
  _id: string;
};

export interface adminProps {
  info: adminInfo;
  isLoggedIn: boolean;
}

const initialState: adminProps = {
  info: {
    cin: "",
    email: "",
    name: "",
    phone: "",
    _id: "",
  },
  isLoggedIn: false,
};

export const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    setAdmin: (state, { payload }: PayloadAction<adminInfo>) => {
      const { cin, email, name, phone, _id } = payload;
      state.isLoggedIn = true;
      state.info = { cin, email, name, phone, _id };
    },
  },
});
// Here we are just exporting the actions from this slice, so that we can call them anywhere in our app.
export const { setAdmin } = adminSlice.actions;

// exporting the reducer here, as we need to add this to the store
export const adminReducer = adminSlice.reducer;
