import React from 'react';
import {Box, Heading} from 'native-base';
import PaymentItem from '@components/PaymentItem';
import SwitchWithValue from '../../components/SwitchWithValue';
import CouponButton from '../../components/CouponButton';

interface ISelectPaymentSectionProp {}

const SelectPaymentSection: React.FC<ISelectPaymentSectionProp> = () => {
  return (
    <Box py="10">
      <PaymentItem
        isHightlight
        title="Giá món ăn"
        value={<Heading fontSize="16">100.000đ</Heading>}
      />
      <PaymentItem
        title="Dùng 500 xu"
        value={<SwitchWithValue isActive={false} value={5000} />}
      />
      <PaymentItem
        title="Giao tận cửa"
        value={<SwitchWithValue isActive={true} value={4000} />}
      />
      <PaymentItem
        title="Lấy dụng cụ ăn uống"
        value={<SwitchWithValue isActive={true} value={3000} />}
      />
      <PaymentItem title="Khuyến mãi" value={<CouponButton />} />
    </Box>
  );
};

export default SelectPaymentSection;
