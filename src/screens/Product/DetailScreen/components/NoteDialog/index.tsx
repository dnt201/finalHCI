import React, {useState} from 'react';
import {Text, Spinner} from 'native-base';
import {TouchableOpacity} from 'react-native';
import {styles} from './styles';

//designs
// import BaseInput from "@designs/BaseInput";
import BaseDialog from '@designs/BasicDialog';
import BaseTextArea from '@designs/BaseTextArea';

//form control

interface INoteDialogProps {
  isOpen: boolean;
  handleClose: () => void;
  handleAccept: () => void;
  onClose?: () => void;
  onAccept?: () => void;
}

interface IFormValue {
  name?: string;
}

const NoteDialog: React.FC<INoteDialogProps> = props => {
  const {isOpen, handleClose, handleAccept, onClose, onAccept} = props;

  //local states
  const [initialValues, setInitialValues] = useState<IFormValue>({
    name: '',
  });
  const [loading, setLoading] = useState<boolean>(false);

  //local functions
  const handleSubmit = (values: IFormValue) => {};

  return (
    <BaseDialog
      isOpen={isOpen}
      handleAccept={handleAccept}
      handleClose={handleClose}
      onClose={onClose}
      onAccept={onAccept}>
      <BaseTextArea height="150" my="5" placeholder="Ví dụ: Không cay" />
      <TouchableOpacity style={styles.button} onPress={() => handleClose()}>
        <Text color="white.100" fontWeight="700" fontSize="16" mr="3">
          Áp dụng
        </Text>
        {loading ? <Spinner size="sm" color="white.100" /> : null}
      </TouchableOpacity>
    </BaseDialog>
  );
};

export default NoteDialog;
