import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { adminReducer, UserReducer } from "@/slices";

export const store = configureStore({
  reducer: {
    admin: adminReducer,
    user: UserReducer,
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
