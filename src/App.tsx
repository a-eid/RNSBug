import 'react-native-gesture-handler';

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import {ScrollView} from 'react-native';

const stack = createNativeStackNavigator();

export function App() {
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen
          name="home"
          component={Home}
          options={{
            title: 'Home',
            headerLargeTitle: true,
          }}
        />
      </stack.Navigator>
    </NavigationContainer>
  );
}

function Home() {
  return <ScrollView />;
}
