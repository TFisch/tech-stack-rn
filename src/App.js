import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { CreateStore } from 'redux';

const App = () => {
  return (
    <Provider store={createStore}>
      <View />
    </Provider>
  );
};

export default App;