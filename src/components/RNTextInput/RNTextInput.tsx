import PropTypes from 'prop-types';
import React from 'react';
import {TextInput, TextInputProperties} from 'react-native';
import TextInputStyles from './TextInputStyles';

const RNTextInput = ({...props}: TextInputProperties) => (
  <TextInput style={TextInputStyles.inputStyle} {...props} />
);

RNTextInput.propTypes = {
  placeholder: PropTypes.string.isRequired,
  onChangeText: PropTypes.func.isRequired,
};

export default RNTextInput;
