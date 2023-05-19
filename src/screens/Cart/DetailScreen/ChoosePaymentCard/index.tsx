import HorizontalBar from '@designs/HorizontalBar';
import {RightArrow, ZaloPay} from '@icons';
import {Heading, VStack} from 'native-base';
import React from 'react';

interface IChoosePaymentCardProps {
  onPress: () => void;
}

const ChoosePaymentCard: React.FC<IChoosePaymentCardProps> = props => {
  const {onPress} = props;
  return (
    <HorizontalBar
      onPress={() => onPress()}
      leftIcon={ZaloPay}
      rightIcon={<RightArrow />}
      mt="5"
      midContent={
        <VStack space="5">
          <Heading size="sm">Phương thức thanh toán</Heading>
          <Heading size="xs" color="body.100" opacity={0.6}>
            Ví điện tử Zalopay
          </Heading>
        </VStack>
      }
    />
  );
};

export default ChoosePaymentCard;
