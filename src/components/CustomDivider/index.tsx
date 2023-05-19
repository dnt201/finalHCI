import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Box, Text} from 'native-base';

interface iCustomDivider {
  s: string;
}
const CustomDivider: React.FC<iCustomDivider> = props => {
  return (
    <View style={styles.dividerContainer}>
      <Box style={styles.dividerContainer__left} backgroundColor={'gray.200'} />
      <Text color={'gray.500'}>{props.s}</Text>
      <Box
        style={styles.dividerContainer__right}
        backgroundColor={'gray.200'}
      />
    </View>
  );
};

export default CustomDivider;

const styles = StyleSheet.create({
  dividerContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingVertical: 8,
  },
  dividerContainer__left: {
    height: 1,
    flex: 1,
  },
  dividerContainer__right: {
    flex: 1,
    height: 1,
  },
});
