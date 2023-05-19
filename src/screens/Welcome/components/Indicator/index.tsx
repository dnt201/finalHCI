import {Animated, StyleSheet, View} from 'react-native';
import React from 'react';
import {responsiveByHeight, width} from '@common/styles';

interface Props {
  length: number;
  scrollX: Animated.Value;
}

export const Indicator: React.FC<Props> = ({length, scrollX}) => {
  return (
    <View style={[styles.container]}>
      {Array(length)
        .fill('')
        .map((_, index) => {
          const inputRange = [
            (index - 1) * width,
            index * width,
            (index + 1) * width,
          ];
          const backgroundColor = scrollX.interpolate({
            inputRange,
            outputRange: ['#dfdfdf', '#6C63FF', '#dfdfdf'],
            extrapolate: 'clamp',
          });
          const opacity = scrollX.interpolate({
            inputRange,
            outputRange: [0.8, 1, 0.8],
            extrapolate: 'clamp',
          });

          return (
            <Animated.View
              key={`indicator_welcome_${index}`}
              style={[
                styles.indicator,
                {
                  backgroundColor,
                  opacity,
                },
              ]}
            />
          );
        })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: responsiveByHeight(120),
    flexDirection: 'row',
    justifyContent: 'center',
  },
  indicator: {
    width: 8,
    height: 8,
    borderRadius: 5,
    marginHorizontal: 5,
  },
});
