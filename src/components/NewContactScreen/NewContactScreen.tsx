import React, {useState} from 'react';
import {View, ScrollView, Text, TextInput} from 'react-native';
import NewContactStyles from './NewContactStyles';
import RNTextInput from '../RNTextInput/RNTextInput';

const NewContactScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState(0);

  const handleEmail = (email: string) => {
    setEmail(email)
  }

  const handleName = (name: string) => {
    setName(name)
  }

  const handleMobileNumber = (mobileNum: number) => {
    setMobileNumber(mobileNum)
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

    </View>
  );
};

export default NewContactScreen;
