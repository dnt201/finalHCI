import React, {useEffect, useState} from 'react';
import {Box, HStack, Image, Text, Pressable, Button} from 'native-base';
import {height, responsive} from '@common/styles';
import {Decrease, Increase, X} from '@icons';
import {TouchableOpacity} from 'react-native';
import PopUpStoreNotify from '@components/PopUpStoreNotify';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {IRootStackParamList} from '@navigator';
import {IRecommentOptions} from 'src/typings/recommendOptions';
interface IDetailScreenProps
  extends NativeStackScreenProps<IRootStackParamList, 'ProductList'> {}

const DetailScreen: React.FC<IDetailScreenProps> = ({navigation}) => {
  const [num, setNum] = useState(1);
  const [showPopUp, setShowPopUp] = useState(false);
  const [notify, setNotify] = useState('');
  const [listRecomend, setListRecomend] = useState<IRecommentOptions[]>([]);

  useEffect(() => {
    console.log(1);
    console.log(listRecomend);
  }, [listRecomend]);

  const decreaseClick = () => {
    if (num >= 1) {
      setNum(num - 1);
    }
  };
  const decreaseQuick = () => {
    if (num - 5 >= 1) {
      setNum(num - 5);
    }
  };

  return (
    <Box h="100%" bg="white.100" position="relative">
      {showPopUp && (
        <PopUpStoreNotify
          notify={notify}
          listSelect={listRecomend}
          setNotify={temp => setNotify(temp)}
          closePop={() => {
            setShowPopUp(false);
            console.log(notify);
          }}
        />
      )}
      <Pressable
        _pressed={{opacity: 0.6}}
        bg="line"
        p="3"
        position="absolute"
        zIndex="1"
        rounded="full"
        top={responsive(5)}
        left={responsive(5)}
        onPress={() => navigation.goBack()}>
        <X />
      </Pressable>
      <Image
        width="100%"
        height={height / 5}
        alt="Detail product image"
        src="https://cdn.tgdd.vn/2021/01/CookRecipe/Avatar/com-chien-ga-xoi-mo-thumbnail.jpg"
      />
      <HStack px="4" pt="6" pb="2" justifyContent="space-between">
        <Text variant="xl_bold">Cơm gà xối mỡ</Text>
        <Text variant="xl_bold" mr="2">
          {String(56000).prettyMoney().toString()}đ
        </Text>
      </HStack>
      <Text px="4" pb="2" variant="sm_medium" color="body.100">
        Cơm sườn + cơm đùi gà nướng ngũ vị + 2 canh + 2 nước tuỳ chọn + 2 khăn
        lạnh
      </Text>
      <HStack
        px="4"
        alignItems="center"
        py="3"
        borderColor="line"
        borderTopWidth="4px"
        borderWidth="1px">
        <Text variant="md_bold">Thêm lưu ý cho quán</Text>
        <Text pl="2" variant="sm_medium" color="body.100">
          không bắt buộc
        </Text>
      </HStack>
      <Pressable onPress={() => setShowPopUp(!showPopUp)}>
        <Text
          px="4"
          py="3"
          color="body.100"
          variant="sm_medium"
          borderColor="line"
          borderBottomWidth="1px"
          alignItems="center">
          {notify || listRecomend.length > 0 ? (
            <>
              {notify}
              {listRecomend.map(value => (
                <Text
                  p="1"
                  borderWidth="1"
                  borderColor="primary.100"
                  color="primary.100">
                  {' + '}
                  {value.value}
                </Text>
              ))}
            </>
          ) : (
            'Việc thực hiện yêu cầu còn tuỳ thuộc vào "KHẢ NĂNG" của quán!'
          )}
        </Text>
      </Pressable>
      <HStack py={8} alignItems="center" justifyContent="center">
        <Pressable
          style={{padding: 16}}
          onPress={decreaseClick}
          onLongPress={decreaseQuick}>
          <Decrease />
        </Pressable>
        <Text variant="lg_bold" w={'24px'} textAlign="center">
          {num}
        </Text>
        <Pressable
          style={{padding: 8, marginLeft: 8}}
          onPress={() => setNum(num + 1)}
          onLongPress={() => setNum(num + 5)}>
          <Increase />
        </Pressable>
      </HStack>
      <TouchableOpacity
        style={{
          width: '100%',
          alignItems: 'center',
          position: 'absolute',
          bottom: responsive(40),
        }}>
        {num <= 0 ? (
          <Button
            variant="primary"
            width="90%"
            maxW="95%"
            onPress={() => navigation.goBack()}>
            Quay lại thực đơn
          </Button>
        ) : (
          <Button
            variant="primary"
            width="90%"
            maxW="95%"
            onPress={() => navigation.navigate('OrderDetail', {id: '1'})}>
            <Text variant="lg_bold" color="white.100">
              {`Thêm vào giỏ hàng - ${Number(56000 * num)
                .toString()
                .prettyMoney()}đ`}
            </Text>
          </Button>
        )}
      </TouchableOpacity>
    </Box>
  );
};

export default DetailScreen;
