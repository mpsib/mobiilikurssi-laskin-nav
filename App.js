import { createContext, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Calculator from './components/Calculator';
import History from './components/History';

import { StyleContext, styles } from './StyleContext';

export default function App() {
  
  const [history, setHistory] = useState([]);

  const appendHistory = (item) => {
    setHistory([...history, {key: item}]);

  };

  const Stack = createNativeStackNavigator();

  return (
    <StyleContext.Provider value={styles}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Calculator'>
            { props => <Calculator {...props} appendHistory={appendHistory}/> }
          </Stack.Screen>
          <Stack.Screen name='History' >
            { props => <History {...props} history={history} />}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </StyleContext.Provider>
  );
}
