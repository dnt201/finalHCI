import {StyleSheet, View} from 'react-native';
import React from 'react';
import {width, colors, height} from '@common/styles';
import {Text} from 'native-base';
import {IWelcome} from '@screens/Welcome/listWelcome';

interface Props extends IWelcome {}

export const WelcomeItem = ({title, subTitle, Svg}: Props) => {
  return (
    <View style={styles.containerItem}>
      <Svg />
      <Text variant="xl2_bold" style={styles.title}>
        {title}
      </Text>
      <Text variant="lg_regular" style={styles.subTitle}>
        {subTitle}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  containerItem: {
    width: width,
    flex: 1,
    alignItems: 'center',
    marginTop: height / 10,
  },
  image: {
    width: (width * 90) / 100,
    height: (height * 50) / 100,
    maxHeight: 720,
  },
  title: {
    color: colors.BLACK,
    width: 260,
    textAlign: 'center',
    marginBottom: 4,
    marginTop: 20,
  },
  subTitle: {
    color: colors.BLACK,
    width: 260,
    textAlign: 'center',
  },
});
