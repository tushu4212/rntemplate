import {ContextValue} from '@types';
import React, {createContext, useState} from 'react';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigation from './src/navigation/RootNavigation';
import store from './src/redux/store';


export const GlobalContext = createContext<ContextValue | null>(null);

const App: React.FC<ContextValue> = () => {
  const [context, setContext] = useState(0);

  return (
    // <GlobalContext.Provider value={{context: context, setContext: setContext}}>
      // </GlobalContext.Provider>
      <PaperProvide  settings={{
        rippleEffectEnabled: false,
      }}>
      <Provider store={store}>
      <NavigationContainer>
        <StackNavigation />
      </NavigationContainer>
      </Provider>
      </PaperProvider>
  );
};

export default App;
