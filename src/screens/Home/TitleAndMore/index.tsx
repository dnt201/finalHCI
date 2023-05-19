import React from 'react';
import {HStack, Text} from 'native-base';
import {TouchableOpacity, StyleSheet} from 'react-native';

interface iTitleAndMore {
  title: string;
  onClick: () => void;
}
const TitleAndMore: React.FC<iTitleAndMore> = props => {
  const {title, onClick} = props;
  return (
    <HStack alignItems="center" justifyContent="space-between">
      <Text fontSize={18} fontWeight={'600'}>
        {title}
      </Text>
      <TouchableOpacity style={styles.btn} onPress={() => onClick()}>
        <Text>See all</Text>
      </TouchableOpacity>
    </HStack>
  );
};

export default TitleAndMore;
const styles = StyleSheet.create({
  btn: {
    padding: 4,
  },
});
