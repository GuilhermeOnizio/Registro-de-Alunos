import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import InputScreen from './screens/InputScreen';
import DisplayScreen from './screens/DisplayScreen';
import { StudentProvider } from './StudentContext'; // Importando o StudentProvider

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StudentProvider>
        <Stack.Navigator>
          <Stack.Screen
            name="InputScreen"
            component={InputScreen}
            options={{
              title: 'Escola Estadual Arco-iris',
              headerStyle: {
                backgroundColor: '#440000', // Cor de fundo do header
              },
              headerTintColor: 'white', // Cor do texto do header
            }}
          />
          <Stack.Screen
            name="DisplayScreen"
            component={DisplayScreen}
            options={{
              title: 'Alunos Registrados',
              headerStyle: {
                backgroundColor: '#440000', // Cor de fundo do header
              },
              headerTintColor: 'white', // Cor do texto do header
            }}
          />
        </Stack.Navigator>
      </StudentProvider>
    </NavigationContainer>
  );
}
