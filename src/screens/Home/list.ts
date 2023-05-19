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
      name: 'Áo Polo WH5000X',
      image: a,
      price: 85.0,
      sold: 722,
      rating: 4.2,
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
