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
  [
    //áo
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
  [
    //quần dài
    {
      name: 'Áo Polo WH5000X',
      image: a,
      price: 85.0,
      sold: 722,
      rating: 4.2,
    },
  ],
  [
    //Vest
    {
      name: 'Áo Polo WH5000X',
      image: a,
      price: 85.0,
      sold: 722,
      rating: 4.2,
    },
  ],
  [
    //Giày
    {
      name: 'Áo Polo WH5000X',
      image: a,
      price: 85.0,
      sold: 722,
      rating: 4.2,
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
