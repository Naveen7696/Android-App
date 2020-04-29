import React from 'react';
import { View, Image, Button } from 'react-native';
import HomeStyles from './HomeStyles';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={HomeStyles.container}>
      <Image
        style={HomeStyles.logo} 
        source={require('../../images/contact-logo.svg')}
      />
      <Button
        title="Contacts"
        onPress={() => navigation.navigate('Contacts')}
      />
    </View>
  );
}

export default HomeScreen;