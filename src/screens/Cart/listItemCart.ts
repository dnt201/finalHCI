import {ImageSourcePropType} from 'react-native/types';
import shirt1 from '@assets/images/Shirt/shirt1.png';
import shirt2 from '@assets/images/Shirt/shirt2.png';
import shirt3 from '@assets/images/Shirt/shirt3.png';
import shirt4 from '@assets/images/Shirt/shirt4.png';
import shirt5 from '@assets/images/Shirt/shirt5.png';
import pant1 from '@assets/images/Pant/pant1.png';
import pant2 from '@assets/images/Pant/pant2.png';
import pant3 from '@assets/images/Pant/pant3.png';
import shoes1 from '@assets/images/Shoes/shoes1.png';
import shoes2 from '@assets/images/Shoes/shoes2.png';
import shoes3 from '@assets/images/Shoes/shoes3.png';
import shoes4 from '@assets/images/Shoes/shoes4.png';
import shoes5 from '@assets/images/Shoes/shoes5.png';
import shoes6 from '@assets/images/Shoes/shoes6.png';
import shoes7 from '@assets/images/Shoes/shoes7.png';
import shoes8 from '@assets/images/Shoes/shoes8.png';
export interface iItemCart {
  name: string;
  image: ImageSourcePropType;
  color: string;
  colorCode: string;
  price: number;
  countNum: number;
  size: string;
}

export const listItemCart: iItemCart[] = [
  {
    name: 'Áo Thun Raglan Label Signature',
    image: shirt1,
    price: 35.0,
    color: 'Nâu',
    colorCode: '#D2691E',
    countNum: 1,
    size: 'L',
  },
  {
    name: 'Nike Air Force 1 07',
    image: shoes2,
    price: 120.6,
    color: 'Trắng',
    colorCode: '#fff',
    countNum: 2,
    size: '41.5',
  },
  {
    name: "Nike Blazer Low '77 Vintage",
    image: shoes6,
    price: 42.29,
    color: 'Đỏ',
    colorCode: '#ff0000',
    countNum: 2,
    size: '37',
  },
  {
    name: 'Quần Tây Slim-fit Lưng Phối Nhung Tăm',
    image: pant2,
    price: 45.45,
    color: 'Đen',
    colorCode: '#000',
    countNum: 1,
    size: 'XL',
  },
  {
    name: 'Áo Polo Sọc Phối Cổ Nhung',
    image: shirt5,
    price: 28.0,
    color: 'Xám',
    colorCode: '#808080',
    countNum: 1,
    size: 'M',
  },
];

export const listItemCart2: iItemCart[] = [
  {
    name: 'Nike Jordan',
    image: shoes2,
    price: 35.0,
    color: 'Trắng',
    colorCode: '#fff',
    countNum: 1,
    size: 'L',
  },
  {
    name: 'Nike Air Force 1 07',
    image: shoes3,
    price: 120.6,
    color: 'Xám',
    colorCode: '#808080',
    countNum: 2,
    size: '41.5',
  },
  {
    name: "Nike Blazer Low '77 Vintage",
    image: shoes1,
    price: 42.29,
    color: 'Xanh dương',
    colorCode: '#87ceeb',

    countNum: 2,
    size: '37',
  },
  {
    name: 'Quần Tây Slim-fit Lưng Phối Nhung Tăm',
    image: pant1,
    price: 45.45,
    color: 'Đen',
    colorCode: '#000',
    countNum: 1,
    size: 'XL',
  },
];
