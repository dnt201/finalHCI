import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {iCategoryItem} from '@screens/Home/list';

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
  Category__Detail: {category: iCategoryItem};
  Category__More: undefined;
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
  NotifyList: undefined;
  NotifyDetail: {id: string};

  //Coupon
  CouponList: {isFromHome?: boolean};
  CouponDetail: {id: string};

  //Product
  Product__MostPopular: undefined;
  ProductList: {id: string; title: string};
  ProductDetail: {id: string};
  ProductFilter: undefined;

  //Order
  Order: undefined;
  OrderDetail: {id: string};
  Booking: {id: string};

  //Cart
  Cart: undefined;
};

export const RootStack = createNativeStackNavigator<IRootStackParamList>();
