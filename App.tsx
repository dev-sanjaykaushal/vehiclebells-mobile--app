import React, {useEffect} from 'react';
import "react-native-gesture-handler"
import AuthRouter from './src/router/authRoutes';
import { NavigationContainer } from '@react-navigation/native';
function App() {
  return (
    <NavigationContainer>
      <AuthRouter />
    </NavigationContainer>
  );
}

export default App;