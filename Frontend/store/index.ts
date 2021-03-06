import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { adminReducer, superReducer, UserReducer } from "@/slices";

export const store = configureStore({
  reducer: {
    admin: adminReducer,
    user: UserReducer,
    super: superReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
