import {StyleSheet, Text, View} from 'react-native';
import React, {createContext, useState} from 'react';
import {Provider} from 'react-redux';
import {store} from 'src/redux/store/store';
import {ContextValue} from '@types';

export const GlobalContext = createContext<ContextValue | null>(null);

const App: React.FC<ContextValue> = () => {
  const [context, setContext] = useState(0);

  return (
    <GlobalContext.Provider value={{context: context, setContext: setContext}}>
      <Provider store={store}>
        <View style={styles.container}>
          <Text>Hello from react native template</Text>
        </View>
      </Provider>
    </GlobalContext.Provider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
