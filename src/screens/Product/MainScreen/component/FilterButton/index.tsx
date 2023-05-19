import React, {ReactNode} from 'react';
import {Icon, IPressableProps, Pressable, Text} from 'native-base';

interface IFilterButtonProps extends IPressableProps {
  leftIcon?: ReactNode;
}

const FilterButton: React.FC<IFilterButtonProps> = props => {
  const {children, leftIcon = null, isPressed} = props;
  return (
    <Pressable
      mr="3"
      rounded="2xl"
      borderWidth="1"
      borderColor="line"
      px="4"
      py="1"
      flexDir="row"
      alignItems="center"
      _pressed={{bg: 'primary.100'}}
      {...props}>
      <Text
        mr={leftIcon !== null ? '2' : '0'}
        color={isPressed ? 'secondary.100' : 'body.100'}>
        {children}
      </Text>
      <Icon as={leftIcon} />
    </Pressable>
  );
};

export default FilterButton;
