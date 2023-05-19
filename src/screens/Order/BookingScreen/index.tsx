import React, {useState} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {IRootStackParamList} from '@navigator';
import ScreenWithBackLayout from '@layouts/ScreenWithBackLayout';
import BaseDatePicker from '@designs/DatePicker';

//form validation
import {Formik} from 'formik';
import * as yup from 'yup';

interface IBookingScreenProps
  extends NativeStackScreenProps<IRootStackParamList, 'Booking'> {}

interface IFormValue {
  bookingDate: string;
}

const validationSchema = yup.object().shape<{[k in keyof IFormValue]: any}>({
  bookingDate: yup.string().required('Vui lòng chọn ngày'),
});

const BookingScreen: React.FC<IBookingScreenProps> = ({navigation}) => {
  const [initialValues, setInitialValues] = useState<IFormValue>({
    bookingDate: '',
  });
  const handleSubmit = (values: IFormValue) => {
    console.log(values);
  };

  return (
    <ScreenWithBackLayout
      title="Trang đặt bàn"
      handleGoBack={() => navigation.goBack()}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}>
        <BaseDatePicker name="bookingDate" label="Chọn ngày" />
      </Formik>
    </ScreenWithBackLayout>
  );
};

export default BookingScreen;
