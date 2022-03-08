import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "@/store";

// declaring the types for our state
export interface UserProps {
  UserInfo: UserInfo;
  VaccinationProcess: VaccinationProcess;
}

export interface UserInfo {
  name: string;
  cin: string;
  avatar: string;
  phone: string;
  address: string;
  city: string;
  country: string;
  vaccinations: Vaccination[];
  center: string;
}

export interface Vaccination {
  shot: string;
  datetime: string;
}

export interface VaccinationProcess {
  shot: string;
  isSick: boolean;
  sickType: string;
}

const initialState: UserProps = {
  UserInfo: {
    name: "",
    cin: "",
    avatar: "",
    phone: "",
    address: "",
    city: "",
    country: "",
    vaccinations: [
      {
        shot: "1",
        datetime: "",
      },
    ],
    center: "",
  },
  VaccinationProcess: {
    shot: "1",
    isSick: false,
    sickType: "",
  },
};

export const UserSlice = createSlice({
  name: "User",
  initialState,
  reducers: {
    setUserInfo: (state, { payload }: PayloadAction<UserInfo>) => {
      const {
        name,
        cin,
        avatar,
        phone,
        address,
        city,
        country,
        vaccinations,
        center,
      } = payload;
      state.UserInfo = {
        name,
        cin,
        avatar,
        phone,
        address,
        city,
        country,
        vaccinations,
        center,
      };
    },
    setIsSickStore: (state, { payload }: PayloadAction<boolean>) => {
      state.VaccinationProcess.isSick = payload;
    },
    setShot: (state, { payload }: PayloadAction<string>) => {
      state.VaccinationProcess.shot = payload;
    },
    setCinStore: (state, { payload }: PayloadAction<string>) => {
      state.UserInfo.cin = payload;
    },
    setSickType: (state, { payload }: PayloadAction<string>) => {
      state.VaccinationProcess.sickType = payload;
    },
  },
});
// Here we are just exporting the actions from this slice, so that we can call them anywhere in our app.
export const {
  setUserInfo,
  setIsSickStore,
  setShot,
  setCinStore,
  setSickType,
} = UserSlice.actions;

// exporting the reducer here, as we need to add this to the store
export const UserReducer = UserSlice.reducer;
