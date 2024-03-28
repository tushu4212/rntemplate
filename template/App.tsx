import {ContextValue} from '@types';
import React, {createContext, useState} from 'react';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigation from './src/navigation/stackNavigation';
import { store } from 'src/store/reducers';

export const GlobalContext = createContext<ContextValue | null>(null);

const App: React.FC<ContextValue> = () => {
  const [context, setContext] = useState(0);

  return (
    <GlobalContext.Provider value={{context: context, setContext: setContext}}>
      {/* <Provider store={store}> */}
      <NavigationContainer>
        <StackNavigation />
      </NavigationContainer>
      {/* </Provider> */}
    </GlobalContext.Provider>
  );
};

export default App;
