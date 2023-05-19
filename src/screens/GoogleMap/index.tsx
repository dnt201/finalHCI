import React, {useState} from 'react';
import {Box, Heading, Text, VStack, Pressable} from 'native-base';
import MapView, {Marker} from 'react-native-maps';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {IRootStackParamList} from '@navigator';
import ScreenWithBackLayout from '@layouts/ScreenWithBackLayout';
import {Increase, LocationFill} from '@icons';

//components
import SearchBar from '@components/SearchBar';
import HorizontalBar from '@designs/HorizontalBar';

interface ICoordinate {
  longitude: number;
  latitude: number;
}

type ILocationType = 'Home' | 'Office' | 'Other';

interface IFormValue {
  name: string;
  type: ILocationType;
}

interface IGoogleMapScreenProps
  extends NativeStackScreenProps<IRootStackParamList, 'GoogleMap'> {}

const GoogleMapScreen: React.FC<IGoogleMapScreenProps> = ({navigation}) => {
  const [coordinate, setCoordinate] = useState<ICoordinate>({
    latitude: 10.782947493224354,
    longitude: 106.6801123029753,
  });
  const [initialValues, setInitialValues] = useState<IFormValue>({
    name: '',
    type: 'Home',
  });
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const [service, setService] = useState<string>('');

  const handleConfirm = () => {
    setOpenDialog(true);
  };

  const handleSubmit = (values: IFormValue) => {
    console.log(values);
  };

  return (
    <ScreenWithBackLayout
      handleGoBack={() => navigation.goBack()}
      title="Bạn đang ở chỗ nèo">
      <SearchBar
        onFetchData={() => {}}
        placeHolder="Tìm kiếm địa điểm của bạn"
      />
      {/* <BasicDialog open={openDialog}>
        <Formik
          initialValues={initialValues}
          enableReinitialize
          onSubmit={handleSubmit}
        >
          <VStack px="5" py="5">
            <Heading size="md">Thông tin địa chỉ</Heading>
            <VStack space="10" mt="5">
              <BaseInput name="name" label="Tên địa chỉ" />
            </VStack>
          </VStack>
        </Formik>
      </BasicDialog> */}
      <Box width="100%" height="70%" borderColor="line" borderWidth="1" mt="5">
        <MapView
          style={{
            width: '100%',
            height: '100%',
            marginHorizontal: 'auto',
          }}
          initialRegion={{
            latitude: 10.782947493224354,
            longitude: 106.6801123029753,
            latitudeDelta: 0,
            longitudeDelta: 0,
          }}>
          <Marker
            draggable
            coordinate={coordinate}
            onDragEnd={e => setCoordinate(e.nativeEvent.coordinate)}
          />
        </MapView>
      </Box>
      <VStack mt="5" space="10">
        <Heading size="sm">Địa điểm hiện tại của bạn</Heading>
        <HorizontalBar
          onPress={() => handleConfirm()}
          _pressed={{bg: 'line'}}
          mb="5"
          width="100%"
          leftIcon={<LocationFill />}
          midContent={
            <Box width="80%">
              <Heading size="sm">Không có thông tin</Heading>
              <Text color="body.100" fontSize="13" numberOfLines={1}>
                73 Rạch Bùng Binh, Phường 9, Quận 3, Thành Phố Hồ Chí Minh
              </Text>
            </Box>
          }
          rightIcon={
            <Pressable p="2" justifyContent="center" alignItems="center">
              <Increase color="#FFC107" />
            </Pressable>
          }
        />
      </VStack>
    </ScreenWithBackLayout>
  );
};

export default GoogleMapScreen;
