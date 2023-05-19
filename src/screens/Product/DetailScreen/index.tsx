import React, {useEffect, useState} from 'react';
import {
  HStack,
  Text,
  Pressable,
  Button,
  View,
  VStack,
  Checkbox,
} from 'native-base';
import {Decrease, Increase, X} from '@icons';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {IRootStackParamList} from '@navigator';
import ScreenWithImageLayout from '@layouts/ScreenWithImageLayout';

import {
  listProduct,
  listCouple,
  listProductForYou,
  IProduct,
  IGroupTopping,
} from '@screens/Store/MainScreen/listDumpData';
//components
import ButtonCart from '@components/ButtonCart';
//common
import {styles} from './styles';
import {IRecommendOptions} from 'src/typings/recommendOptions';
import PopUpStoreNotify from '@components/PopUpStoreNotify';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';

interface IDetailScreenProps {}
type Props = NativeStackNavigationProp<IRootStackParamList, 'ProductDetail'>;
type ParamList = {
  DetailScreen: {
    id: string;
  };
};
const DetailScreen: React.FC<IDetailScreenProps> = () => {
  // var temp: IProduct | undefined;
  const route = useRoute<RouteProp<ParamList, 'DetailScreen'>>();
  const navigation = useNavigation<Props>();
  const [product, setProduct] = useState<IProduct | undefined>();
  const [totalPrice, setTotalPrice] = useState(0);
  const [num, setNum] = useState(1);
  const [showPopUp, setShowPopUp] = useState(false);
  const [notify, setNotify] = useState('');
  const [listRecommend, setListRecommend] = useState<IRecommendOptions[]>([]);
  console.log(route);

  const [groupTopping, setGroupTopping] = useState<IGroupTopping[]>([]);

  useEffect(() => {
    if (product !== undefined) {
      let tempCost =
        (product.price - (product.price * product.perSale) / 100) * num;
      groupTopping.forEach(group => {
        group.listTopping.forEach(topping => {
          tempCost = tempCost + topping.price;
        });
      });
      setTotalPrice(tempCost);
    }
  }, [groupTopping, product, num]);

  useEffect(() => {
    //Gọi api theo id
    var temp: IProduct | undefined;
    if (listProduct.find(({id}) => id === route.params.id)) {
      temp = listProduct.find(({id}) => id === route.params.id);
    } else if (listCouple.find(({id}) => id === route.params.id)) {
      temp = listCouple.find(({id}) => id === route.params.id);
    } else {
      temp = listProductForYou.find(({id}) => id === route.params.id);
    }
    setProduct(temp);
    console.log(temp);
  }, [route.params]);

  const handleDecrease = () => {
    if (num >= 1) {
      setNum(num - 1);
    }
  };

  const handleQuickDecrease = () => {
    if (num - 5 >= 1) {
      setNum(num - 5);
    }
  };

  return (
    <View minH="100%">
      {showPopUp && (
        <PopUpStoreNotify
          notify={notify}
          listSelect={listRecommend}
          setNotify={temp => setNotify(temp)}
          closePop={() => {
            setShowPopUp(false);
            // console.log(notify);
          }}
        />
      )}
      {product && (
        <>
          <ScreenWithImageLayout
            handleGoBack={() => navigation.goBack()}
            leftIcon={X}
            imgUrl={product?.image}
            m={0}>
            <HStack px="4" pt="6" pb="2" justifyContent="space-between">
              <Text variant="xl_bold" w="3/4" numberOfLines={2}>
                {product?.name}
              </Text>
              <Text variant="xl_medium" mr="2">
                {String(
                  product.price - (product.price * product.perSale) / 100,
                ).prettyMoney()}
                đ
              </Text>
            </HStack>
            <Text px="4" pb="2" color="body.100">
              Cơm sườn + cơm đùi gà nướng ngũ vị + 2 canh + 2 nước tuỳ chọn + 2
              khăn lạnh
            </Text>
            {product?.listGroupTopping &&
              product.listGroupTopping.length > 0 && (
                <VStack>
                  {product.listGroupTopping.map(groupData => (
                    <View key={groupData.id}>
                      <VStack px="4" py="2" bgColor="greyLight">
                        <HStack alignItems="center">
                          <Text variant="lg_bold">{groupData.name}</Text>
                          {groupData.description.length > 0 && (
                            <Text variant="xs_medium">
                              {' - ' + groupData.description}
                            </Text>
                          )}
                        </HStack>
                        <Text variant="xs_medium">
                          {'(Chọn tối đa '}
                          {groupData.maxSelect}
                          {')'}
                        </Text>
                      </VStack>
                      <Checkbox.Group
                        onChange={values => {
                          let tempGroup = {...groupData};
                          tempGroup.listTopping = [];
                          values.map(item => {
                            const topping = groupData.listTopping.find(
                              topping => topping.id === item,
                            );
                            if (topping != undefined) {
                              tempGroup.listTopping.push(topping);
                            }
                          });
                          let tempListGroupTopping = [...groupTopping];
                          //Chọn thêm
                          if (tempGroup.listTopping.length > 0) {
                            if (
                              //Check xem cái state đã có "GROUP TOPPING" gì bên trong chưa
                              tempListGroupTopping === undefined ||
                              tempListGroupTopping.length === 0
                            ) {
                              //Chưa thì push nó vào luôn
                              tempListGroupTopping = [tempGroup];
                            } else {
                              //Nếu có rồi thì chia 2 TH:
                              {
                                var overWrite = false;
                                var i = 0;
                                for (; i < tempListGroupTopping.length; i++) {
                                  //TH1: Cái vừa chọn đã có trong state -> over write lại
                                  if (
                                    tempListGroupTopping[i].id === tempGroup.id
                                  ) {
                                    tempListGroupTopping[i] = tempGroup;
                                    overWrite = true;
                                    break;
                                  }
                                }
                                //TH2: Nếu cái vừa chọn không có thì push vào state
                                if (overWrite === false) {
                                  tempListGroupTopping.push(tempGroup);
                                }
                              }
                            }
                            setGroupTopping(tempListGroupTopping);
                          }
                          //Xóa đi
                          else {
                            if (tempListGroupTopping !== undefined) {
                              const index = tempListGroupTopping.findIndex(
                                item => {
                                  return item.id === tempGroup.id;
                                },
                              );

                              tempListGroupTopping.splice(index, 1);
                              setGroupTopping(tempListGroupTopping);
                            }
                          }
                        }}
                        py="2"
                        mb="2"
                        mx="4">
                        {groupData.listTopping.map(topping => (
                          <Checkbox
                            my="2"
                            p="1"
                            size="lg"
                            key={topping.id}
                            value={topping.id}
                            isDisabled={
                              groupTopping !== undefined &&
                              groupTopping.length > 0 &&
                              groupTopping.some((thisG, index) => {
                                if (thisG.id === groupData.id) {
                                  if (
                                    groupTopping[index].listTopping.length ===
                                      groupData.maxSelect &&
                                    !thisG.listTopping.contains(topping)
                                  ) {
                                    return true;
                                  }
                                }
                                return false;
                              })
                            }>
                            <View flexDirection="row">
                              <Text pl="2" flex="1" variant="sm_regular">
                                {topping.name}
                              </Text>
                              <Text variant="sm_semibold" mr="8">
                                + {String(topping.price).prettyMoney()}đ
                              </Text>
                            </View>
                          </Checkbox>
                        ))}
                      </Checkbox.Group>
                    </View>
                  ))}
                </VStack>
              )}
            <HStack
              px="4"
              alignItems="center"
              py="3"
              borderColor="line"
              borderTopWidth="4px"
              borderWidth="1px">
              <Text fontSize="md" fontWeight="bold">
                Thêm lưu ý cho quán
              </Text>
              <Text pl="2" color="body.100">
                không bắt buộc
              </Text>
            </HStack>
            <Pressable
              onPress={() => setShowPopUp(!showPopUp)}
              _pressed={{opacity: 0.6}}>
              <Text
                px="4"
                py="3"
                color="body.100"
                borderColor="line"
                borderBottomWidth="1px">
                {notify || listRecommend.length > 0 ? (
                  <>
                    {notify}
                    {listRecommend.map(value => (
                      <Text
                        key={value.id}
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
            <HStack
              pt="8px"
              pb="150px"
              alignItems="center"
              justifyContent="center">
              <Pressable
                style={{padding: 16}}
                onPress={handleDecrease}
                onLongPress={handleQuickDecrease}>
                <Decrease />
              </Pressable>
              <Text
                fontWeight="bold"
                fontSize="16"
                w={'24px'}
                textAlign="center">
                {num}
              </Text>
              <Pressable
                style={styles.AddButton}
                onPress={() => setNum(num + 1)}
                onLongPress={() => setNum(num + 5)}>
                <Increase />
              </Pressable>
            </HStack>
          </ScreenWithImageLayout>
          <View style={styles.ButtonWrapper}>
            {num <= 0 ? (
              <Button
                variant="primary"
                width="90%"
                maxW="95%"
                onPress={() => navigation.navigate('Store')}>
                Quay lại thực đơn
              </Button>
            ) : (
              <ButtonCart
                price={totalPrice}
                width="90%"
                navigateToShipping={() => navigation.navigate('Order')}
              />
            )}
          </View>
        </>
      )}
    </View>
  );
};

export default DetailScreen;
