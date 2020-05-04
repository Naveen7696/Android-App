import PropTypes from 'prop-types';
import React from 'react';
import { TextInput } from 'react-native';
import TextInputStyles from './TextInputStyles';

const RFTextInput = ({ placeholder, onChangeText }: any) => ( 
  <TextInput
    placeholder={placeholder}
    style={TextInputStyles.inputStyle}
  />
);

RFTextInput.propTypes = {
  placeholder: PropTypes.string.isRequired,
}

export default RFTextInput;