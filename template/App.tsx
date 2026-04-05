import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { PaperProvider } from 'react-native-paper';
import { Provider } from 'react-redux';
import StackNavigation from './src/navigation/RootNavigation';
import store from './src/redux/store';
import { CommonStyles } from './src/components/Common/CommonStyles';
import {
  initialWindowMetrics,
  SafeAreaProvider,
} from 'react-native-safe-area-context';

const App: React.FC = () => {
  return (
    <SafeAreaProvider
      CommonStyles={[CommonStyles.flex1]}
      initialMetrics={initialWindowMetrics}
    >
      <PaperProvider
        settings={{
          rippleEffectEnabled: false,
        }}
      >
        <Provider store={store}>
          <NavigationContainer>
            <StackNavigation />
          </NavigationContainer>
        </Provider>
      </PaperProvider>
    </SafeAreaProvider>
  );
};

export default App;
