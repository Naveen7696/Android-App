import React from 'react';
import {View, Text, Button} from 'react-native';
import PopUpStyles from './PopUpMessageStyles';
import {useNavigation} from '@react-navigation/native';
import Modal from 'react-native-modal';
import {PopUpTypes} from '../../types';

const PopUpMessage = ({message, redirectComponent, buttonTitle}: PopUpTypes) => {
  const navigation = useNavigation();
  return (
    <Modal isVisible={true} style={PopUpStyles.container}>
      <View style={PopUpStyles.box}>
        <Text style={PopUpStyles.box}>{message}</Text>
        <Button
          title={buttonTitle}
          onPress={() => navigation.navigate(redirectComponent)}
        />
      </View>
    </Modal>
  );
};

export default PopUpMessage;
