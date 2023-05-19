import {StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {colors} from '@common/styles';
import {Magnify, Setting} from '@icons';
import {HStack, Text} from 'native-base';

const ButtonFind = () => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        console.log('click');
      }}>
      <HStack alignItems="center" space={8}>
        <Magnify stroke={colors.SMOKE} />
        <Text color={colors.SMOKE} flex={1}>
          Search your product
        </Text>
        <Setting />
      </HStack>
    </TouchableOpacity>
  );
};

export default ButtonFind;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.BORDER,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 16,
  },
});
