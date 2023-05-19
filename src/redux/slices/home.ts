import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export type IScreenType = 'Delivery' | 'Service' | 'Shopping';

interface IInitialState {
  type: IScreenType;
}

const initialState: IInitialState = {
  type: 'Delivery',
};

const homeSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setScreenType: (state, actions: PayloadAction<IScreenType>) => {
      state.type = actions.payload;
    },
  },
});

export const {setScreenType} = homeSlice.actions;

export default homeSlice.reducer;
