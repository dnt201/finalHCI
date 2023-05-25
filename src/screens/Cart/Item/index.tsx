import {
  Image,
  Pressable,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {iItemCart} from '../listItemCart';
import {
  Box,
  Center,
  HStack,
  VStack,
  Text,
  Input,
  Modal,
  Button,
} from 'native-base';
import {colors, height, width} from '@common/styles';
import {Trash, TrashFill} from '@icons';

interface iItemCartProps extends iItemCart {
  removeItem: () => void;
  setNumCount: (n: number) => void;
  listItem: iItemCart[];
}
const ItemCart: React.FC<iItemCartProps> = props => {
  const {removeItem, setNumCount} = props;
  const [item, setItem] = useState(props);
  const [showRemove, setShowRemove] = useState(false);
  return (
    <HStack
      position={'relative'}
      w={'100%'}
      space={'12px'}
      p={3}
      bgColor={'#fff'}
      rounded={12}>
      <Box
        p={'4px'}
        w={width / 4}
        h={width / 4}
        rounded={12}
        bgColor={colors.BORDER}>
        <Center>
          <Image style={styles.image} source={props.image} alt="logo" />
        </Center>
      </Box>
      <VStack flex={1} justifyContent={'space-evenly'}>
        <HStack alignItems={'center'}>
          <Text flex="1" fontSize={18} fontWeight={600} numberOfLines={1}>
            {item.name}
          </Text>
          <TouchableOpacity onPress={() => setShowRemove(true)}>
            <Trash width={18} height={18} />
          </TouchableOpacity>
        </HStack>
        <HStack alignItems={'center'} space={8}>
          <Box
            bgColor={item.colorCode}
            borderWidth={1}
            borderColor={
              item.colorCode.includes('#fff') ? '#2e2e2e' : 'transparent'
            }
            w={'12px'}
            h={'12px'}
            rounded="full"
          />
          <Text color={colors.BODY} fontSize={12}>
            {item.color}
          </Text>
          <Box h={'60%'} w={1} bgColor={colors.BODY} />
          <Text color={colors.BODY} fontSize={12}>
            {' '}
            Size = {item.size}
          </Text>
        </HStack>
        <HStack alignItems={'center'} justifyContent={'space-between'}>
          <Text fontSize={16} fontWeight={600} flex={1} numberOfLines={1}>
            $ {item.countNum * item.price}
          </Text>
          <HStack alignItems={'center'}>
            <Pressable
              onPress={() => {
                if (item.countNum - 1 <= 0) setShowRemove(true);
                else {
                  setItem({...item, countNum: item.countNum - 1});
                  setNumCount(item.countNum - 1);
                }
              }}>
              <Box
                roundedBottomLeft={12}
                roundedTopLeft={12}
                h={'36px'}
                backgroundColor={'#f0f0f0'}
                px={2}>
                <Text fontSize={20}>-</Text>
              </Box>
            </Pressable>
            <Input
              value={item.countNum.toString()}
              onChangeText={text => {
                if (parseInt(text))
                  setItem({...item, countNum: parseInt(text)});
              }}
              textAlign={'center'}
              h={'36px'}
              w={40}
              variant={'unstyled'}
              rounded={0}
              backgroundColor={'#f0f0f0'}
            />
            <Pressable
              onPress={() => {
                setNumCount(item.countNum + 1);
                setItem({...item, countNum: item.countNum + 1});
              }}>
              <Box
                px={2}
                roundedBottomRight={12}
                roundedTopRight={12}
                h={'36px'}
                backgroundColor={'#f0f0f0'}>
                <Text fontSize={20}>+</Text>
              </Box>
            </Pressable>
          </HStack>
        </HStack>
      </VStack>
      <Modal isOpen={showRemove} onClose={() => setShowRemove(false)}>
        <Modal.Content>
          <Modal.CloseButton />
          <Modal.Header>Xóa sản phẩm!</Modal.Header>
          <Modal.Body>
            <Text>Bạn có muốn xóa sản phẩm {item.name} ra khỏi giỏ hàng?</Text>
          </Modal.Body>
          <Modal.Footer>
            <Button.Group space={2}>
              <Button
                variant="ghost"
                colorScheme="blueGray"
                onPress={() => {
                  setShowRemove(false);
                }}>
                Cancel
              </Button>
              <Button
                onPress={() => {
                  removeItem();
                  setShowRemove(false);
                }}>
                Yes
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </HStack>
  );
};

export default ItemCart;

const styles = StyleSheet.create({
  image: {
    width: width / 4 - 8,
    height: width / 4 - 8,
  },
});
