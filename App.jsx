import React from 'react';

import { Camera } from 'expo-camera';
import { useState, useEffect } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer, TabActions} from '@react-navigation/native';

import Lista from './src/filmes/Lista';
import Detalhes from './src/filmes/Detalhes';


//import Camera from './Camera'

export default function App() {

  const Stack = createNativeStackNavigator();
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [Permission, setPermission] = useState(null);




  return (
    
    <NavigationContainer  
    > 

      <Stack.Navigator initialRouteName='Lista'
      
      
      screenOptions={{
        title: 'Lista',
        headerStyle:  {
          backgroundColor: 'transparent',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        
      }}

    
      >
     
        <Stack.Screen name='Lista' component={Lista}
        options={{ title:'Meu Catálogo Marvel', headerShow: false, headerTransparent: true, headerTitleAlign:'center'}} />
        <Stack.Screen name='Detalhes' component={Detalhes}
        options={{ title:'Detalhes do Filme', headerShow: false, headerTransparent: true, headerTitleAlign:'center',
        headerTintColor:'#fff'}} />
       
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


/* <View style={{flex: 1, backgroundColor: 'transparent', flexDirection: 'row'}}>
            <TouchableOpacity
            style={{
              position: 'absolute',
              bottom: 30,
              right: 30,
            }}
              onPress={ () => {
                setType(
                  type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
                );
              }}
              >
                <Text style={{color: '#000000', fontSize: 30, marginBottom: 12 }}>Alterar a Camera</Text>
              </TouchableOpacity>
                
          </View>
          </Camera>*/