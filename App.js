import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainTabScreen from './screens/MainTabScreen';
import StartScreen from './screens/StartScreen'

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      {/* <MainTabScreen/> */}
      <Stack.Navigator screenOptions={{
        headerShown:false
      }}
      initialRouteName='Start'
      
      >
      <Stack.Screen name="Home" component={MainTabScreen} />
      <Stack.Screen name="Start" component={StartScreen} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

