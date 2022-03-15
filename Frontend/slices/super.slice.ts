import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "@/store";

type adminInfo = {
  email: string;
  name: string;
  _id: string;
  isLoggedIn: boolean;
};

const initialState: adminInfo = {
  email: "",
  name: "",
  _id: "",
  isLoggedIn: false,
};

export const superSlice = createSlice({
  name: "super",
  initialState,
  reducers: {
    setSuper: (state, { payload }: PayloadAction<adminInfo>) => {
      const { email, name, _id } = payload;
      state.name = name;
      state.email = email;
      state._id = _id;
      state.isLoggedIn = true;
    },
  },
});
// Here we are just exporting the actions from this slice, so that we can call them anywhere in our app.
export const { setSuper } = superSlice.actions;

// exporting the reducer here, as we need to add this to the store
export const superReducer = superSlice.reducer;
