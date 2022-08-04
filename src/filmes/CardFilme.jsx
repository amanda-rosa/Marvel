import react from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import { Card, Image,Button } from "@rneui/themed";

export default function CardFilme(props){


  //console.log(props);
    return(
        <Card containerStyle={{backgroundColor: '#000', marginTop:70, marginBottom: -40, borderColor:'rgba(118, 0, 0, 0.87)'}}>

        <Card.Title style={{fontSize:18, color:'white', fontWeight:'bold', elevation:12}}>{props.data.nome}</Card.Title>
        <Card.Divider style={{backgroundColor:'white'}}/>

        <Card.Image
        style={{ padding:0, width:'100%' }}
        source={{ uri: props.data.imagem}}
        resizeMode='cover'
        onPress={() => { props.Navigation(props)} }
        />

        <Text numberOfLines={2} style={{ marginBottom: 10, marginTop:14, alignSelf:'center', textAlign:'center', color:'white'}}>
          {props.data.descricao}
        </Text>

        <Button
            onPress={() => { props.Navigation(props)} }    //() => navigation.navigate('Detalhes')
            title="Abrir detalhes"
            >
            </Button>

      </Card>

      
        
    )
}

const styles = StyleSheet.create({
    list: {
      width: '100%',
      backgroundColor: '#000',
    },
    item: {
      aspectRatio: 1,
      width: '70%',
      borderRadius:16,
      alignSelf:'center',
      
    },
    textoBase:{
      color:'#fff',
      fontSize:14,
    }
    });


   