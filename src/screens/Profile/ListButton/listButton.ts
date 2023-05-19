import {Profile, Location, Notify, Wallet, LogOut, HelpInfo} from '@icons';
// import {IRootStackParamList} from 'src/navigator';

// type NavigationArgs = {
//   [Route in keyof IRootStackParamList]: [
//     routeName: Route,
//     routeParams?: IRootStackParamList[Route],
//   ];
// };

export interface iButton {
  Svg: React.ElementType;
  title: string;
  navigate: string;
}

export const listButton: iButton[] = [
  {
    Svg: Profile,
    title: 'Edit Profile',
    navigate: 'EditProfile',
  },
  {
    Svg: Location,
    title: 'Address',
    navigate: 'Address',
  },
  {
    Svg: Notify,
    title: 'Notification',
    navigate: 'EditProfile',
  },
  {
    Svg: Wallet,
    title: 'Payment',
    navigate: 'EditProfile',
  },
  {
    Svg: HelpInfo,
    title: 'Help Center',
    navigate: 'EditProfile',
  },
  {
    Svg: LogOut,
    title: 'Log Out',
    navigate: 'EditProfile',
  },
];
