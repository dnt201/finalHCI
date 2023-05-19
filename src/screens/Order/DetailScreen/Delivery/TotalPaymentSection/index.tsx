import React from 'react';
import {Text} from 'native-base';
import Layout from '@layouts/OrderDetailSectionLayout';
import PaymentItem from '@components/PaymentItem';

interface IPaymentSectionProps {}

const TotalPaymentSection: React.FC<IPaymentSectionProps> = () => {
  return (
    <Layout title="Thông tin thanh toán">
      <PaymentItem
        isHightlight
        title="Tổng"
        value={
          <Text fontSize="14" color="body.100">
            100.00đ
          </Text>
        }
      />
      <PaymentItem
        title="Phương thức thanh toán"
        value={
          <Text fontSize="14" color="body.100">
            Tiền mặt
          </Text>
        }
      />
      <PaymentItem
        title="Phí giao hàng"
        value={
          <Text fontSize="14" color="body.100">
            15.000đ
          </Text>
        }
      />
      <PaymentItem
        title="Phí áp dụng"
        value={
          <Text fontSize="14" color="body.100">
            5.000đ
          </Text>
        }
      />
      <PaymentItem
        title="Khuyến mãi"
        value={
          <Text fontSize="14" color="primary.100" fontWeight="700">
            Khao 10
          </Text>
        }
      />
      <PaymentItem
        title="Giảm giá"
        value={
          <Text fontSize="14" color="secondary.100">
            -20.000đ
          </Text>
        }
      />
      <PaymentItem
        title="Dùng 500 xu"
        value={
          <Text fontSize="14" color="secondary.100">
            -5000đ
          </Text>
        }
      />
      <PaymentItem
        title="Giao tận cửa"
        value={
          <Text fontSize="14" color="secondary.100">
            10.000đ
          </Text>
        }
      />
      <PaymentItem
        title="Lấy dụng cụ ăn uống"
        value={
          <Text fontSize="14" color="secondary.100">
            5.000đ
          </Text>
        }
      />
      <PaymentItem
        isHightlight
        title="Giá cuối"
        value={
          <Text fontSize="14" color="primary.100" fontWeight="700">
            50.000đ
          </Text>
        }
      />
    </Layout>
  );
};

export default TotalPaymentSection;
