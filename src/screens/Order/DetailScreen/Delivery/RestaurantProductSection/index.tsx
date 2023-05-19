import React from 'react';
import OrderCard from '../../components/OrderCard';
import Layout from '@layouts/OrderDetailSectionLayout';

interface IListRestaurantProductsProps {}

const RestaurantProductSection: React.FC<
  IListRestaurantProductsProps
> = props => {
  return (
    <Layout title="Papa xốt - Nguyễn Thái Học">
      <OrderCard mb="5" />
      <OrderCard />
    </Layout>
  );
};

export default RestaurantProductSection;
