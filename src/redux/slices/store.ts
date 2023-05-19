import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export type IScreenType = 'Menu' | 'Information' | 'Image' | 'Review';

interface IState {
  screenType: IScreenType;
}
const initialState: IState = {
  screenType: 'Menu',
};

const storeSlice = createSlice({
  name: 'store',
  initialState,
  reducers: {
    setScreenType: (state, actions: PayloadAction<IScreenType>) => {
      state.screenType = actions.payload;
    },
  },
});

export const {setScreenType} = storeSlice.actions;

export default storeSlice.reducer;
