import React from 'react';
import { SafeAreaView, FlatList, StatusBar } from 'react-native';
import * as NavigationBar from 'expo-navigation-bar';
import { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import filmes from './Detalhes';
import { Chamada } from './Filme';
import CardFilme from './CardFilme';


export default function Lista({navigation}){

  const  dados =  Chamada();
  const [filmes, setFilmes] = useState(null);
  
  NavigationBar.setVisibilityAsync('hidden');
  NavigationBar.setBackgroundColorAsync('transparent');
  NavigationBar.setPositionAsync('relative');

    return(

      <View>

        
        <FlatList style={{backgroundColor:'rgba(118, 0, 0, 0.87)'}}
        
        data={dados}
        keyExtractor = {item => item.id}
        renderItem = {({item}) => <CardFilme data={item} Navigation = {() =>  navigation.navigate('Detalhes',
        {item}
        ) }/>}
        />
      
      

        </View>
        
        
    );
}


