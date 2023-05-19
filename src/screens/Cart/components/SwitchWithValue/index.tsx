import React from 'react';
import {HStack, Switch, Text} from 'native-base';

interface ISwitchWithValueProps {
  value: number;
  isActive: boolean;
}

const SwitchWithValue: React.FC<ISwitchWithValueProps> = props => {
  return (
    <HStack space="5">
      <Text color="secondary.100" fontSize="14">
        +{props.value.toString()}đ
      </Text>
      <Switch value={props.isActive} colorScheme="primary" />
    </HStack>
  );
};

export default SwitchWithValue;
