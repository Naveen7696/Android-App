import {StyleSheet} from 'react-native';

const NewContactStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  formLabel: {
    fontSize: 20,
  },
  inputStyle: {
    marginTop: 20,
    width: 300,
    height: 40,
    paddingHorizontal: 10,
    borderRadius: 50,
    backgroundColor: '#DCDCDC',
  },
  submitButton: {
    marginTop: 30,
    padding: 10,
    backgroundColor: 'green',
    color: 'white',
  },
  submitButtonText: {
    color: 'white',
  },
});

export default NewContactStyles;
