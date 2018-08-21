import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';

import store from './src/store';
import { CryptoContainer } from './src/components';
import { Header } from 'react-native-elements';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View >
          <Header
            leftComponent={{ icon: 'menu', color: '#fff' }}
            centerComponent={{ text: 'CRYPTO TRACKER', style: { color: '#fff' } }}
            rightComponent={{ icon: 'home', color: '#fff' }}
          />
          <CryptoContainer />
        </View>
      </Provider>
    );
  }
}
