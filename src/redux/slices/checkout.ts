import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface iAddress {
  name: string;
  detail: string;
}
export const listAddress: iAddress[] = [
  {
    name: 'Home',
    detail: '7 đường 21 Bình An Quận 2',
  },
  {
    name: 'Office',
    detail: 'VNG Campus lô Z06 KCX Tân Thuận Q7',
  },
  {
    name: 'Apartment',
    detail: '3359 Liên Phường Phước Long B Quận 9',
  },
];
export interface iShipping {
  name: string;
  detail: string;
  amount: number;
}
export const listShipping: iShipping[] = [
  {
    name: 'Economy',
    detail: 'Estimated Arrival, Dec 20-23',
    amount: 10,
  },
  {
    name: 'Regular',
    detail: 'Estimated Arrival, Dec 20-23',
    amount: 15,
  },
  {
    name: 'Cargo',
    detail: 'Estimated Arrival, Dec 20-23',
    amount: 20,
  },
  {
    name: 'Express',
    detail: 'Estimated Arrival, Dec 20-23',
    amount: 30,
  },
];
export interface iPromo {
  name: string;
  detail: string;
  discountPercent: number;
}
export const listPromo: iPromo[] = [
  {
    name: 'Special 25% off',
    detail: 'Special promo only today',
    discountPercent: 25,
  },
  {
    name: 'Discount 30% off',
    detail: 'New user special promo',
    discountPercent: 30,
  },
  {
    name: 'Special 15% off',
    detail: 'Special promo only today',
    discountPercent: 15,
  },
  {
    name: 'Special 20% off',
    detail: 'Special promo only today',
    discountPercent: 20,
  },
];

interface iInitialState {
  address: iAddress | undefined;
  shipping: iShipping | undefined;
  promo: iPromo | undefined;
}

const initialState: iInitialState = {
  address: listAddress[0],
  shipping: undefined,
  promo: undefined,
  // userInfor: null,
};

const checkoutSlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    setShipPing: (state, actions: PayloadAction<number>) => {
      state.shipping = listShipping[actions.payload];
    },
    setAddress: (state, actions: PayloadAction<number>) => {
      state.address = listAddress[actions.payload];
    },
    setPromo: (state, actions: PayloadAction<number>) => {
      state.promo = listPromo[actions.payload];
    },
    resetAll: state => {
      state = initialState;
    },
  },
});

export const {
  setAddress,
  setShipPing,
  setPromo,
  resetAll,
  // setInputMode
} = checkoutSlice.actions;
export default checkoutSlice.reducer;
