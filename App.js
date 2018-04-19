import React from 'react';

import Controller from './Controller';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import PersistedStore from './redux/store';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={PersistedStore.store}>
        <PersistGate loading={null} persistor={PersistedStore.persistor}>
          <Controller />
        </PersistGate>
      </Provider>
    );
  }
}
