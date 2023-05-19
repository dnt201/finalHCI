import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export type IInputMode = 'INPUT_OTP' | 'INPUT_PHONE_NUMBER';
interface IInitialState {
  isDoneFirstTime: boolean;
  user: string | null;
}

const initialState: IInitialState = {
  isDoneFirstTime: false,
  user: null,
  // userInfor: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setIsFirstTime: (state, actions: PayloadAction<boolean>) => {
      state.isDoneFirstTime = actions.payload;
    },
    setUser: (state, actions: PayloadAction<string | null>) => {
      state.user = actions.payload;
      // },
      // setInputMode: (state, actions: PayloadAction<IInputMode>) => {
      //   state.inputMode = actions.payload;
    },
  },
});

export const {
  setIsFirstTime,
  setUser,
  // setInputMode
} = authSlice.actions;
export default authSlice.reducer;
