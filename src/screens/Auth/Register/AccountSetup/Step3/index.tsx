import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import HeaderBackLayout from '@layouts/HeaderBackLayout';
import {FingerPrint} from '@icons';
import {colors} from '@common/styles';
interface iStep3Props {
  setStep: (step: number) => void;
}
const Step3: React.FC<iStep3Props> = props => {
  const {setStep} = props;

  return (
    <HeaderBackLayout title="Set Your Fingerprint" goBack={() => setStep(2)}>
      <View style={styles.fingerPrintContainer}>
        <Text style={styles.fingerPrint__title}>
          Thêm vân tay của bản giúp thao tác nhanh chóng và bảo mật.
        </Text>
        <FingerPrint width={200} height={200} />
        <Text style={styles.fingerPrint__title}>
          Vui lòng đặt ngón tay lên máy quét để bắt đầu thực hiện
        </Text>
        <View style={{...styles.bottomBtnContainer}}>
          <TouchableOpacity style={styles.bottomBtn}>
            <Text style={{fontSize: 13}}>Skip</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{...styles.bottomBtn, backgroundColor: colors.PRIMARY}}>
            <Text style={{color: colors.WHITE, fontSize: 13}}>Continue</Text>
          </TouchableOpacity>
        </View>
      </View>
    </HeaderBackLayout>
  );
};

export default Step3;

const styles = StyleSheet.create({
  fingerPrint__title: {
    textAlign: 'center',
    marginTop: 64,
    marginBottom: 48,
    fontSize: 14,
    fontWeight: '300',
    paddingHorizontal: 8,
  },
  fingerPrintContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomBtnContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  bottomBtn: {
    height: 44,
    width: '45%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 32,
    fontSize: 13,
    backgroundColor: colors.SMOKE,
  },
});
