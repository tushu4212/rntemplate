import { StyleSheet, Text, View } from 'react-native'
import React,{createContext} from 'react'
import { Provider } from 'react-redux'
import store from './src/redux/store/store'
export const GlobalContext = createContext(null);
const App = () => {
  const [context, setContext] = useState(0);
  return (
    <GlobalContext.Provider value={{context: context, setContext: setContext}}>
<Provider store={store}>
    <View styles={{styles.container}}>
      <Text>Hello from react native template
      </Text>
      </View>
      </Provider>
      </GlobalContext.Provider>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignitems: 'center',
  }
})