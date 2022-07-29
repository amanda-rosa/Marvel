import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer, TabActions} from '@react-navigation/native';

import Lista from './src/filmes/Lista';
import Detalhes from './src/filmes/Detalhes';




export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    
    <NavigationContainer  
    >
      <Stack.Navigator initialRouteName='Lista'
      
      screenOptions={{
        title: 'Lista',
        headerStyle:  {
          backgroundColor: 'orange',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        
      }}
      
      >
        <Stack.Screen name='Lista' component={Lista}
        options={{ title:'Minhas Lista', headerShow: false, headerTransparent: false}} />
        <Stack.Screen name='Detalhes' component={Detalhes}
        options={{ title:'Meus Detalhes', headerShow: false, headerTransparent: false}} />

      </Stack.Navigator>
      
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
