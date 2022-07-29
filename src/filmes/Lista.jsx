import React from 'react';
import { SafeAreaView, FlatList } from 'react-native';
import { StyleSheet, Text, View, Button } from 'react-native';

import { useEffect, useState } from 'react';

import filmes from './Detalhes';


export default function Lista({navigation}){

  console.log(navigation);
    return(
        <View style={{backgroundColor:'#000', flex:1, justifyContent:'center'}}> 
            <Text style={{color:'orange', fontSize:25, fontWeight:'bold', alignSelf:'center'}}>
                Testar a tela ....
            </Text>


            <Button
            onPress={() => navigation.navigate('Detalhes')}
            title="Teste"
            >
            </Button>
        </View>
    );
}

/*
import Film from '../filmes/Film';

import api from '../service/api';


export default function filmes() {

    const [listFilms, setListFilms] = useState([]);

    useEffect(()=>{
        async function getMarvel() {
          try {
            const response = await api.get('/filmes'); 

            setListFilms(response);
            
            
          } catch (error) {
            
          };

      

        }
        getMarvel();


    },[]);

  return (
    <SafeAreaView>

      <FlatList
        data={listFilms}
        keyExtractor={(itens)=> itens.id }
        renderItem={(itens)=> <Film data={itens} />} 
      />

    </SafeAreaView>
  );
}

*/