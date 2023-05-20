import {
  Dress,
  Glasses,
  HandBag,
  Hat,
  Pant,
  Shirt,
  Shoes,
  Short,
  Vali,
  Vest,
} from '@icons';
import {ImageSourcePropType} from 'react-native';
import a from '@assets/images/product1.png';
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
export interface iCategoryItem {
  id: number;
  name: string;
  icon: React.ElementType;
}
export interface iProductItem {
  name: string;
  image: ImageSourcePropType;
  rating: number;
  sale?: number;
  price: number;
  sold: number;
}

export const listOfListItem: iProductItem[][] = [
  //áo
  [
    {
      name: 'Áo Thun Raglan Label Signature',
      image: shirt1,
      price: 35.0,
      sold: 722,
      rating: 4.4,
    },
    {
      name: 'Áo Thun Regular Basic W Logo Details',
      image: shirt2,
      price: 22.0,
      sold: 722,
      rating: 4.2,
    },
    {
      name: 'Áo Tanktop Be Confident',
      image: shirt3,
      price: 18.5,
      sold: 722,
      rating: 3.7,
    },
    {
      name: 'Áo Polo Basic ProMax',
      image: shirt4,
      price: 29.9,
      sold: 722,
      rating: 4.9,
    },
    {
      name: 'Áo Polo Sọc Phối Cổ Nhung',
      image: shirt5,
      price: 28.0,
      sold: 722,
      rating: 4.6,
    },
  ],
  //quần dài
  [
    {
      name: 'Quần Tây Slim-fit Lưng Phối Nhung Tăm',
      image: pant2,
      price: 45.45,
      sold: 12,
      rating: 4.2,
    },
    {
      name: 'Quần Jeans Vip Slim Classic Gentle',
      image: pant1,
      price: 52.5,
      sold: 399,
      rating: 4.2,
    },
    {
      name: 'Quần Tây Classic Gentle',
      image: pant3,
      price: 85.0,
      sold: 722,
      rating: 4.2,
    },
  ],
  //Vest
  [],
  //Giày
  [
    {
      name: 'Air Jordan Low SE',
      image: shoes1,
      price: 85.0,
      sold: 123,
      rating: 2.2,
    },
    {
      name: 'Nike Air Force 1 07',
      image: shoes2,
      price: 120.6,
      sold: 442,
      rating: 2.4,
    },
    {
      name: 'Nike Air Max Pulse',
      image: shoes3,
      price: 49.99,
      sold: 378,
      rating: 4.2,
    },
    {
      name: "Nike Blazer Low '77 Vintage",
      image: shoes4,
      price: 42.29,
      sold: 821,
      rating: 3.7,
    },
    {
      name: 'Nike Dunk High Retro Premium',
      image: shoes5,
      price: 69.39,
      sold: 119,
      rating: 4.2,
    },
    {
      name: 'Áo Polo WH5000X',
      image: shoes6,
      price: 85.0,
      sold: 722,
      rating: 3.2,
    },
    {
      name: 'Air Jordan 1 Low FlyEase',
      image: shoes7,
      price: 83.29,
      sold: 581,
      rating: 4.1,
    },
    {
      name: 'Nike Pegasus 40 SE',
      image: shoes8,
      price: 83.29,
      sold: 222,
      rating: 4.8,
    },
  ],
];

export const listCategory: iCategoryItem[] = [
  {id: 0, name: 'Áo', icon: Shirt},
  {id: 1, name: 'Quần dài', icon: Pant},
  {id: 2, name: 'Vest', icon: Vest},
  {id: 3, name: 'Giày', icon: Shoes},
  {id: 4, name: 'Mũ', icon: Hat},
  {id: 5, name: 'Kính', icon: Glasses},
  {id: 6, name: 'Quần sort', icon: Short},
  {id: 7, name: 'Túi xách', icon: HandBag},
  {id: 8, name: 'Váy', icon: Dress},
  {id: 9, name: 'Vali', icon: Vali},
];

export const listCategory8: iCategoryItem[] = [
  {id: 0, name: 'Áo', icon: Shirt},
  {id: 1, name: 'Quần dài', icon: Pant},
  {id: 2, name: 'Vest', icon: Vest},
  {id: 3, name: 'Giày', icon: Shoes},
  {id: 4, name: 'Mũ', icon: Hat},
  {id: 5, name: 'Kính', icon: Glasses},
  {id: 6, name: 'Quần sort', icon: Short},
];
