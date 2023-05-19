import React from 'react';
import {Heading, Pressable} from 'native-base';
import {X} from '@icons';

interface ICouponButtonProps {}

const CouponButton: React.FC<ICouponButtonProps> = () => {
  return (
    <Pressable
      flexDir="row"
      _pressed={{opacity: 0.6}}
      px="4"
      py="2"
      borderColor="primary.100"
      borderStyle="dashed"
      borderWidth="1"
      rounded="2xl"
      alignItems="center">
      <Heading size="xs" color="primary.100" mr="3">
        -10.000đ
      </Heading>
      <X color="#FFC107" />
    </Pressable>
  );
};

export default CouponButton;
