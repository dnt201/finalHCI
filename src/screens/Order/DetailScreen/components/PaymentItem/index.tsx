import React, {ReactNode} from 'react';
import {Box, Text} from 'native-base';

interface IPaymentItemProps {
  title: string;
  value: ReactNode;
  isHightlight?: boolean;
}

const PaymentItem: React.FC<IPaymentItemProps> = props => {
  return (
    <Box
      flexDir="row"
      justifyContent="space-between"
      alignItems="center"
      my="2">
      <Text
        fontWeight={props.isHightlight === true ? '700' : '500'}
        fontSize="14"
        color="secondary.100">
        {props.title}
      </Text>
      {props.value}
    </Box>
  );
};

export default PaymentItem;
