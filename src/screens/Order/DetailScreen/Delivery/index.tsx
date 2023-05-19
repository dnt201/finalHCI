import React from 'react';
import OrderDetailLayout from '@layouts/OrderDetailLayout';
import LocationCard from '@components/OrderLocationCard';
import TimeCard from '@components/OrderTimeCard';
import ListRestaurantProduct from './RestaurantProductSection';
import TotalPaymentSection from './TotalPaymentSection';
import {Button} from 'native-base';
import {confirmDialog} from '@components/ConfirmDialog';
import {alertBar} from '@components/AlertBar';

interface IDeliveryDetailProps {
  navigateToBooking: (id: string) => void;
}

const DeliveryDetail: React.FC<IDeliveryDetailProps> = props => {
  const {navigateToBooking} = props;
  const handleCancelOrder = async () => {
    const isOk = await confirmDialog({
      message: 'Xác nhận xóa đơn hàng',
    });
    if (isOk) {
      alertBar({message: 'Đã hủy đơn hàng thành công'});
    }
  };
  return (
    <OrderDetailLayout status="approving" type="booking_table">
      <LocationCard />
      <TimeCard />
      <ListRestaurantProduct />
      <TotalPaymentSection />
      <Button
        variant="primary_outline"
        mt="10"
        onPress={() => navigateToBooking('1')}>
        Huỷ đơn hàng
      </Button>
    </OrderDetailLayout>
  );
};

export default DeliveryDetail;
