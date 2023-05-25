import {RootStack} from '@navigator';
import CartScreen from '@screens/Cart';
import Collection__All from '@screens/Collection__All';
import Product__Detail from '@screens/Product__Detail';
import WishList from '@screens/WishLish';
import React from 'react';
// import ProductDetail from "@screens/Product/DetailScreen";
// import ProductList from "@screens/Product/MainScreen";
// import ProductFilter from "@screens/Product/FilterScreen";

export const renderStackProduct = () => {
  return (
    <>
      <RootStack.Screen name="Product__Detail" component={Product__Detail} />
      <RootStack.Screen name="Collection__All" component={Collection__All} />
      <RootStack.Screen name="WishList" component={WishList} />

      {/*
      <RootStack.Screen name="ProductList" component={ProductList} />
      <RootStack.Screen name="ProductFilter" component={ProductFilter} /> */}
    </>
  );
};
