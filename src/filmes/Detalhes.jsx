import react from "react";
import { View, Text, StyleSheet, ActivityIndicator, ImageBackground, StatusBar } from "react-native";
import { Card, Image,Button } from "@rneui/themed";
import CardFilme from './CardFilme';



export default function Detalhes(props){

  return(
      <View style={{ flex:1, backgroundColor:'#000', justifyContent:'center'}}> 
      <StatusBar backgroundColor='transparent' style='light' animated={true} translucent={true}/>
        <ImageBackground source={{ uri: props.route.params.item.imagem }} 
        resizeMode='cover' style={styles.image}
        >

        <Text style={{fontSize:16 ,textAlign:'center', color:'white', backgroundColor:'rgba(8, 2, 13, 0.6)', width:270, alignSelf:'center'}}>
          {props.route.params.item.descricao}
        </Text>
        </ImageBackground>
      </View>
  );
}


const styles = StyleSheet.create({

  image:{
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent:'center',
    opacity:1,
  },
})