import {Welcome1, Welcome2, Welcome3} from '@icons';

export interface IWelcome {
  id: string;
  title: string;
  subTitle: string;
  Svg: React.ElementType<SVGElement>;
}
export const listWelcome: IWelcome[] = [
  {
    id: '1',
    title: 'Đặt hàng là giao',
    subTitle:
      'Đặt hàng và giao hàng nhanh chóng từ các chi nhánh trên toàn quốc',
    Svg: Welcome1,
  },
  {
    id: '2',
    title: 'Đặt hàng là có',
    subTitle: 'Đặt hàng nhanh chóng và tiện lợi',
    Svg: Welcome2,
  },
  {
    id: '3',
    title: 'Đặt hàng đơn giản',
    subTitle: 'Thực hiện nhanh chóng với các thao tác đơn giản, thân thiện',
    Svg: Welcome3,
  },
];
