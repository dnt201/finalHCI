import React from 'react';
import OrderCard from '../components/OrderCard';
import Layout from '@layouts/OrderDetailSectionLayout';

interface IListRestaurantProductsProps {}

const RestaurantSection: React.FC<IListRestaurantProductsProps> = props => {
  return (
    <Layout title="Papa xốt - Nguyễn Thái Học">
      <OrderCard bg="backGround" />
      <OrderCard />
    </Layout>
  );
};

export default RestaurantSection;
