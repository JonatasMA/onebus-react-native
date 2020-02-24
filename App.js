import React from 'react';
import Routes from './src/routes';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import store from './src/store/store';

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar barStyle="light-content"/>
      <Routes />
    </Provider>
  );
}
