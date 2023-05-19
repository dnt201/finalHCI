import React from 'react';
import {Heading, HStack, Image, Text, VStack} from 'native-base';
import {IHStackProps} from 'native-base/lib/typescript/components/primitives/Stack/HStack';

interface IOrderCardProps extends IHStackProps {}

const OrderCard: React.FC<IOrderCardProps> = props => {
  return (
    <HStack
      w="100%"
      justifyContent="space-between"
      h="100"
      {...props}
      borderColor="line"
      borderWidth="1"
      pl="2"
      borderRadius="3xl">
      <HStack justifyContent="space-between" alignItems="center">
        <Text
          p="1"
          fontSize="11"
          color="primary.100"
          mr="3"
          borderColor="primary.100"
          borderWidth="1"
          rounded="lg">
          1X
        </Text>
        <VStack>
          <Text color="body.100" fontSize="14">
            Combo 2 người BB
          </Text>
          <Heading size="sm">119.000đ</Heading>
        </VStack>
      </HStack>
      <Image
        resizeMethod="resize"
        source={{
          uri: 'https://salt.tikicdn.com/ts/product/97/50/2a/35adf3769ef13a66b006e9a08041ba01.jpg',
        }}
        h="full"
        w="150"
        alt="brand"
        justifyContent="center"
        borderRightRadius="lg"
      />
    </HStack>
  );
};

export default OrderCard;
