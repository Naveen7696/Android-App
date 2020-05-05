import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Alert, ActivityIndicator} from 'react-native';
import NewContactStyles from './NewContactStyles';
import RNTextInput from '../RNTextInput/RNTextInput';
import {useDispatch, useSelector} from 'react-redux';
import { storeContact } from '../../actions';
import * as uiStates from '../../constants/uiStates';

const NewContactScreen = () => {
  const disptach = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState(0);

  const asyncState = useSelector(
    (state: any) => state.contactsReducer.asyncState,
  );
  const error = useSelector(
    (state: any) => state.contactsReducer.error,
  );

  const handleEmail = (email: string) => {
    setEmail(email)
  }

  const handleName = (name: string) => {
    setName(name)
  }

  const handleMobileNumber = (mobileNum: number) => {
    setMobileNumber(mobileNum)
  }

  const validation = () => {
    // Sample validation 
    if(name === "" || email === "" || mobileNumber === 0) {
      return false
    }
    return true
  }

  const createContact = () => {
    if(validation()){
      const contact = {
        name: name,
        email: email,
        mobileNumber: mobileNumber
      }
      disptach(storeContact(contact));
    }
    else{
      Alert.alert("All fields required")
    }
  }

  return (
    <View style={NewContactStyles.container}>
      <Text style={NewContactStyles.formLabel}> New Contact </Text>
      <RNTextInput 
        placeholder="Name"
        onChangeText = {handleName}
      />
      <RNTextInput 
        placeholder="Email"
        onChangeText = {handleEmail}
      />
      <RNTextInput 
        placeholder="Mobile Number"
        onChangeText = {handleMobileNumber}
      />
      { asyncState === uiStates.FAILED && error && 
        <View >
          <Text>error.message</Text>
        </View>
      }
      <TouchableOpacity
          style = {NewContactStyles.submitButton}
          onPress = {
            () => createContact()
          }>
          <Text style = {NewContactStyles.submitButtonText}> Submit </Text>
      </TouchableOpacity>
      { asyncState === uiStates.IN_PROGRESS && 
        <View >
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      }
      { asyncState === uiStates.SUCCESS && 
        <View >
          <Text>Alert.alert("Successfully Submitted")</Text> 
        </View>
      }
    </View>

  );
};

export default NewContactScreen;
