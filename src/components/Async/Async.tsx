import * as React from 'react';
import {View, Text, Image} from 'react-native';

// constants
import {IN_PROGRESS, FAILED, SUCCESS} from '../../constants/uiStates';

type AsyncComponentType = {
  uiState: any;
  onSuccess: Function;
  onFailure: Function;
  onProgress: Function;
  error: any;
};

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
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Image source={require('../../images/loading.gif')} />
    </View>
  ),
  onFailure: (error: any) => (
    <View>
      <Text>{(error && error.message) || 'Something went wrong'}</Text>
    </View>
  ),
};

export default Async;
