import React from 'react';
import OrderCard from '../../components/OrderCard';
import Layout from '@layouts/OrderDetailSectionLayout';

interface IProductItemSectionProps {}

const ProductItemSection: React.FC<IProductItemSectionProps> = props => {
  return (
    <Layout title="Papa xốt - Nguyễn Thái Học">
      <OrderCard mb="5" />
      <OrderCard />
    </Layout>
  );
};

export default ProductItemSection;
