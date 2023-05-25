import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {iCategoryItem, iProductItem} from '@screens/Home/list';

export type IRootStackParamList = {
  Welcome: undefined;

  /*Auth screen*/
  Login: undefined;
  LoginWithEmail: undefined;
  LoginWithGoogle: undefined;
  LoginWithFacebook: undefined;
  LoginWithAppleId: undefined;
  Register: undefined;
  AccountSetup: undefined;
  ForgotPassword: undefined;
  ForgotPassword__VerifyCode: {curData: string};
  ForgotPassWord__CreateNewPass: undefined; //validateOTP
  ValidateOTP: undefined;
  //Category
  Category__Detail: {categoryName: string; id: number};
  // Profile
  EditProfile: undefined;
  EditProfile__Update: undefined;
  EditProfile__ChangePassword: undefined;
  /*Account screen*/
  Main: undefined;
  Payment: undefined;
  Help: undefined;
  SelectLanguage: undefined;
  Location: undefined;
  GoogleMap: undefined;
  SecurityPolicy: undefined;
  TermsOfService: undefined;
  AddBankAccount: undefined;
  AddEWallet: undefined;

  Store: undefined;
  StoreDetail: undefined;
  Home: undefined;

  //Notify
  Notify: undefined;

  //Coupon
  CouponList: {isFromHome?: boolean};
  CouponDetail: {id: string};

  //Product
  Product__MostPopular: undefined;
  ProductList: {id: string; title: string};
  ProductFilter: undefined;
  Product__Detail: {item: iProductItem};
  WishList: undefined;

  //Collection
  Collection__All: undefined;

  //Order
  Order: undefined;
  OrderDetail: {id: string};
  Booking: {id: string};
  Checkout: undefined;
  ShippingAddress: undefined;
  ChoseShipping: undefined;
  AddPromo: undefined;
  PaymentMethod: undefined;
  TrackOrder: {step: number};

  //Cart
  Cart: undefined;

  Checkout__ShippingAddress: undefined;
  Checkout__ChoseShipping: undefined;
  Checkout__AddPromo: undefined;
};

export const RootStack = createNativeStackNavigator<IRootStackParamList>();
