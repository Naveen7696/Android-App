import React from 'react';
import {View, ScrollView, Text, TextInput} from 'react-native';
import NewContactStyles from './NewContactStyles';
import RNTextInput from '../RNTextInput/RNTextInput';

const NewContactScreen = () => {
  
  return (
    <View style={NewContactStyles.container}>
      <Text style={NewContactStyles.formLabel}> New Contact </Text>
      <RNTextInput 
        placeholder="Name"
      />
      <RNTextInput 
        placeholder="Email"
      />
      <RNTextInput 
        placeholder="Mobile Number"
      />

    </View>
  );
};

export default NewContactScreen;
