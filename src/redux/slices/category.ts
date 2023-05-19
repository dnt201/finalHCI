import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export type IInputMode = 'INPUT_OTP' | 'INPUT_PHONE_NUMBER';
interface IInitialState {
  categorySelected: number;
}

const initialState: IInitialState = {
  categorySelected: -1,
  // userInfor: null,
};

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    setCategorySelect: (state, actions: PayloadAction<number>) => {
      state.categorySelected = actions.payload;
    },
  },
});

export const {
  setCategorySelect,
  // setInputMode
} = categorySlice.actions;
export default categorySlice.reducer;
