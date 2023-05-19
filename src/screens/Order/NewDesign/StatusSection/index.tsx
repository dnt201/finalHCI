import React from 'react';
import {View, Text, Image} from 'native-base';
import Step1 from '@assets/images/Step1_RestaurantConfirmOrder.png';
import Step2 from '@assets/images/Step2_RestaurantCooking.png';
import Step3 from '@assets/images/Step3_Shipping.png';
import Step4 from '@assets/images/Step4_Success.png';
import Step0 from '@assets/images/Step_Cancel.png';

import {height} from '@common/styles';
import ProgressBar from '@layouts/OrderDetailLayout/components/Newdesign/ProgressBar';
interface IStatusSection {
  step: number;
}
const StatusSection: React.FC<IStatusSection> = props => {
  const {step} = props;
  React.useEffect(() => {}, [step]);
  return (
    <>
      {step === undefined ? (
        <View>
          <Text>Loading</Text>
        </View>
      ) : (
        <View>
          <Image
            key={step}
            w="100%"
            h={height / 4}
            source={listStatusLazy[step].img}
            alt="step"
          />
          <Text mt="4" marginX="4" variant="xl2_bold" textAlign="center">
            {listStatusLazy[step].title}
          </Text>
          <Text
            marginX="4"
            variant="md_medium"
            textAlign="center"
            color="secondary.500">
            {listStatusLazy[step].subTitle}
          </Text>
          <ProgressBar step={step} mTop={4} />
        </View>
      )}
    </>
  );
};

export interface IStatusItem {
  title: string;
  subTitle: string;
  status: string;
  img: any;
}
const listStatusLazy: IStatusItem[] = [
  {
    title: 'Đơn hàng đã bị huỷ! Vui lòng đặt lại.',
    subTitle: 'Đã có lỗi xảy ra, vui lòng kiên nhẫn',
    status: '',
    img: Step0,
  },
  {
    title: 'Đang chờ nhà hàng xác nhận',
    subTitle: 'Cảm ơn bạn đã đặt hàng',
    status: 'Xác nhận từ nhà hàng',
    img: Step1,
  },
  {
    title: 'Nhà hàng đang chuẩn bị món ăn cho bạn',
    subTitle: 'Chờ một chút nhé!',
    status: 'Đang chuẩn bị món ăn',
    img: Step2,
  },
  {
    title: 'Đang chờ nhà hàng xác nhận',
    subTitle: 'Nêu cần trợ giúp, hãy liên hệ tài xế',
    status: 'Đang giao hàng',
    img: Step3,
  },
  {
    title: 'Đang chờ nhà hàng xác nhận',
    subTitle: 'Cảm ơn bạn đã đặt hàng',
    status: 'Chúc bạn ngon miệng!',
    img: Step4,
  },
];

export default StatusSection;
