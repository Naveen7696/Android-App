import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from 'react-native';
import NewContactStyles from './NewContactStyles';
import RNTextInput from '../RNTextInput/RNTextInput';
import {useDispatch, useSelector} from 'react-redux';
import {storeContact, resetState} from '../../actions';
import * as uiStates from '../../constants/uiStates';
import PopUpMessage from '../PopUpMessage/PopUpMessage';
import {AppStore} from '../../types';

const NewContactScreen = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');

  const asyncState = useSelector(
    (state: AppStore) => state.contactsReducer.asyncState,
  );
  const error = useSelector((state: AppStore) => state.contactsReducer.error);

  const handleEmail = (text: string) => {
    setEmail(text);
  };

  const handleName = (text: string) => {
    setName(text);
  };

  const handleMobileNumber = (text: string) => {
    setMobileNumber(text);
  };

  const validation = () => {
    // Sample validation
    if (name === '' || email === '' || mobileNumber === '') {
      return false;
    }
    return true;
  };

  const createContact = () => {
    if (validation()) {
      const contact = {
        name: name,
        email: email,
        mobileNumber: mobileNumber,
      };
      dispatch(storeContact(contact));
    } else {
      Alert.alert('All fields required');
    }
  };

  useEffect(() => {
    dispatch(resetState());
  }, []);

  return (
    <View style={NewContactStyles.container}>
      <Text style={NewContactStyles.formLabel}> New Contact </Text>
      <RNTextInput placeholder="Name" onChangeText={handleName} />
      <RNTextInput
        placeholder="Email"
        onChangeText={handleEmail}
        keyboardType="email-address"
      />
      <RNTextInput
        placeholder="Mobile Number"
        keyboardType="phone-pad"
        onChangeText={handleMobileNumber}
      />
      {asyncState === uiStates.FAILED && error && (
        <View>
          <Text>error.message</Text>
        </View>
      )}
      <TouchableOpacity
        style={NewContactStyles.submitButton}
        onPress={() => createContact()}>
        <Text style={NewContactStyles.submitButtonText}> Submit </Text>
      </TouchableOpacity>
      {asyncState === uiStates.IN_PROGRESS && (
        <View>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      )}
      {asyncState === uiStates.SUCCESS && (
        <PopUpMessage
          message="Successfully Submitted"
          buttonTitle="ok"
          redirectName="Home"
        />
      )}
    </View>
  );
};

export default NewContactScreen;
