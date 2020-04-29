import React from 'react';
import ContactStyles from "./ContactStyles";
import { View, Text, Image } from 'react-native';
import { ContactProps } from "../../types/index";

const ContactBox = ({contact}: ContactProps) => {
  return(
    <View style={ContactStyles.contact}>
      <View style={ContactStyles.contactLeft}>
        <Image
          style={ContactStyles.userImage}
          source={require('../../images/user.svg')}
        />
      </View>
      <View style={ContactStyles.contactRight}>
        <Text style={ContactStyles.name}>
          {contact.name}
        </Text>
        <Text>
          {contact.email}
        </Text>
        <Text>
          {contact.mobileNumber}
        </Text>
      </View>
    </View>  
  )
}

export default ContactBox;