import React from 'react';
import {
  darkContrast,
  lightContrast,
  nonFocusText,
  additional,
  toggleOff,
  toggleOn,
} from './styles';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Lists from './components/Lists';
import Statistics from './components/Statistics';
import Settings from './components/Settings';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: darkContrast,
          },
          tabBarStyle: {
            backgroundColor: lightContrast,
          },
          headerTitleStyle: {
            color: 'white',
          },
          tabBarActiveTintColor: 'white',
        }}>
        <Tab.Screen name="Lists" component={Lists} />
        <Tab.Screen name="Statistics" component={Statistics} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
