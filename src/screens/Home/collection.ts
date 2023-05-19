import {ImageSourcePropType} from 'react-native';
import Brown from '@assets/images/brown.png';
import Red from '@assets/images/red.png';
import Green from '@assets/images/green.png';
export interface iCollectionItem {
  name: string;
  subTitle: string;
  image: ImageSourcePropType;
  colorCode: string;
}

export const listCollection: iCollectionItem[] = [
  {
    name: 'Thu Đông',
    subTitle:
      'Chiêm ngưỡng bộ sưu tập thu đông, lorem dark theme and more and more something like this',
    image: Brown,
    colorCode: '795548',
  },

  {
    name: 'Mùa Hè',
    subTitle:
      'Chiêm ngưỡng bộ sưu tập thu đông, lorem dark theme and more and more something like this',
    image: Green,
    colorCode: '144734',
  },
  {
    name: 'Mùa Xuân',
    subTitle:
      'Chiêm ngưỡng bộ sưu tập thu đông, lorem dark theme and more and more something like this',
    image: Red,
    colorCode: 'cc041e',
  },
];
