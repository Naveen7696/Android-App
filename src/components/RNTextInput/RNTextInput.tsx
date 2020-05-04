import PropTypes from 'prop-types';
import React from 'react';
import { TextInput } from 'react-native';
import TextInputStyles from './TextInputStyles';

const RNTextInput = ({ placeholder, onChangeText }: any) => ( 
  <TextInput
    placeholder={placeholder}
    style={TextInputStyles.inputStyle}
    onChangeText={onChangeText}
  />
);

RNTextInput.propTypes = {
  placeholder: PropTypes.string.isRequired,
  onChangeText: PropTypes.func.isRequired,
}

export default RNTextInput;