import {Phone} from '@icons';
import {Text, HStack, Image, VStack, View} from 'native-base';
import React from 'react';

interface IProp {
  pX?: string;
  pY?: string;
  mY?: string;
  mT?: string;
}

const ShipperInformationSection: React.FC<IProp> = props => {
  const {pX, pY, mY, mT} = props;
  return (
    <HStack
      alignItems="center"
      bg="secondary.50"
      my={mY ? mY : '0'}
      py={pY ? pY : '0'}
      px={pX ? pX : '0'}
      mt={mT ? mT : '0'}>
      <View pr={4}>
        <Image
          h="48px"
          w="48px"
          source={{
            uri: 'https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745',
          }}
          alt="shipper"
          pr={4}
        />
      </View>
      <VStack flex="1">
        <Text variant="lg_bold">Huỳnh Ngọc Đức</Text>
        <Text>60P1-22446</Text>
      </VStack>
      <Phone />
    </HStack>
  );
};

export default ShipperInformationSection;
