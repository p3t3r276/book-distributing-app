import React from 'react';
import {StatusBar, ActivityIndicator} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/lib/integration/react';

import {Routes} from './src/routes';
import {store, persistor} from './src/common/store/store';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate
        loading={<ActivityIndicator size="large" />}
        persistor={persistor}>
        <SafeAreaProvider>
          <StatusBar />
          <Routes />
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
