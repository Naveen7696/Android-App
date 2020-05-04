import * as React from 'react';
import {View, Text, Image} from 'react-native';

// constants
import {IN_PROGRESS, FAILED, SUCCESS} from '../../constants/uiStates';
import {AsyncComponentType, ErrorType} from '../../types';
import AsyncStyles from './AsyncStyles';

const Async = ({
  uiState,
  onSuccess,
  onFailure,
  onProgress,
  error,
}: AsyncComponentType) => {
  return (
    <>
      {uiState === IN_PROGRESS && onProgress()}
      {uiState === SUCCESS && onSuccess()}
      {uiState === FAILED && error && onFailure(error)}
    </>
  );
};

Async.defaultProps = {
  onProgress: () => (
    <View style={AsyncStyles.onProgress}>
      <Image source={require('../../images/loading.gif')} />
    </View>
  ),
  onFailure: (error: ErrorType) => (
    <View>
      <Text>{(error && error.message) || 'Something went wrong'}</Text>
    </View>
  ),
};

export default Async;
