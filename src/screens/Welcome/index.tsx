import {
  FlatList,
  StyleSheet,
  View,
  TouchableOpacity,
  Animated,
} from 'react-native';
import React, {useState, useRef} from 'react';
import {responsive, width, colors, typos} from '@common/styles';
import {listWelcome} from './listWelcome';
import {Indicator, WelcomeItem} from './components';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {IRootStackParamList} from 'src/navigator';
import {setIsFirstTime} from '@redux/slices/auth';
import {useAppDispatch} from '@hooks/useRedux';
import {Box, Button, StatusBar, Text} from 'native-base';

interface ILoginScreenProps
  extends NativeStackScreenProps<IRootStackParamList, 'Welcome'> {}

const WelcomeScreen: React.FC<ILoginScreenProps> = () => {
  const [idSelected, setIdSelected] = useState(0);
  const dispatch = useAppDispatch();
  const flatRef = useRef<FlatList>(null);
  const scrollX = useRef(new Animated.Value(0)).current;

  const nextPress = () => {
    if (flatRef !== null && flatRef.current !== null) {
      const next = idSelected + 1;
      const offset = next * width;
      flatRef.current.scrollToOffset({offset});
      setIdSelected(next);
    }
  };
  const loginNow = () => {
    dispatch(setIsFirstTime(true));
  };
  return (
    <Box style={styles.container} safeAreaBottom>
      <StatusBar hidden />
      <FlatList
        ref={flatRef}
        data={listWelcome}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        scrollEventThrottle={16}
        snapToAlignment="center"
        decelerationRate="fast"
        renderItem={item => <WelcomeItem {...item.item} />}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: false},
        )}
      />
      <Indicator scrollX={scrollX} length={listWelcome.length} />
      {idSelected < listWelcome.length - 1 ? (
        <View style={styles.bottomContainer}>
          <TouchableOpacity
            style={{flex: 1, paddingVertical: 20}}
            onPress={loginNow}>
            <Text variant="lg_medium" textAlign="left">
              Bỏ qua
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-end',
              paddingVertical: 20,
            }}
            onPress={nextPress}>
            <Text variant="lg_medium" textAlign="right" pr="4px">
              Tiếp theo
            </Text>
          </TouchableOpacity>
        </View>
      ) : (
        <Button variant="primary" onPress={loginNow} w="90%" mx="auto" my="8">
          Bắt đầu mua hàng
        </Button>
      )}
    </Box>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'white'},
  bottomContainer: {
    position: 'absolute',
    bottom: responsive(24),
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'center',
    marginLeft: '5%',
  },
  bottomContainer3: {
    backgroundColor: colors.BLACK,
    position: 'absolute',
    bottom: responsive(20),
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: 8,
    width: '90%',
    paddingVertical: 12,
  },

  text: {
    ...typos.lg.medium,
    color: colors.BLACK,
  },
});
