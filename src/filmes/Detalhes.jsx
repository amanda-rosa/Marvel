import react, {useState, useEffect, useRef} from "react";
import { View, Text, StyleSheet, ScrollView, Modal, Image, ActivityIndicator, Alert,  ImageBackground, StatusBar, TouchableOpacity } from "react-native";
import { Card,Button } from "@rneui/themed";
import { Camera, CameraType } from 'expo-camera';
import { FontAwesome } from '@expo/vector-icons'
import * as Permissions from 'expo-permissions';
import * as MediaLibrary from 'expo-media-library';



export default function Detalhes(props, {navigation}){

  //const [type, setType] = useState(CameraType.back);
  //const [permission, requestPermission] = Camera.useCameraPermissions();
  const cameraRef = useRef(null);
  const[permissao, setHasPermissao] = useState(null);
const [atualizar, setAtulizar]=useState(false);
const [fotoCapturada, setFotocapturada] = useState(null)
const [type, setType] = useState(CameraType.back);
const [abrirModal, setAbrirModal] = useState(false)

//Camera - let, código
let cam =  (camR) => {

  //Capturada
  async function takePicture(){
    if(cameraRef){
     
      const data = await camR.current.takePictureAsync();
      console.log(data);  
      setFotocapturada(data.uri);
      setAbrirModal(true);

    }
  }
 
  async function savePicture(){
    const asset = await MediaLibrary.createAssetAsync(fotoCapturada)
    .then(() =>{
        Alert.alert("Fota salva com sucesso")
    })
    .catch(error => {
      console.log('err', error);
  })
  }

  if(permissao === null){
    return <View/>;
  }
  if(permissao === false){
    return <Text style={{color:'white', alignSelf:'center', fontSize:20, backgroundColor:'black'}}>Acesso Negado.</Text>;
  }
  if(permissao === 'granted'){
    return <View style={styles.container}>
    <Camera style={styles.camera} type={type} ref={cameraRef}>
      <View style={styles.buttonContainer}>

      </View>

      <View style={{alignItems:'baseline', flexDirection:'row', margin:5, justifyContent:'space-between'}}>

      <TouchableOpacity  
      style={{alignSelf:'flex-end', margin:5}}
      onPress={takePicture}>
      <FontAwesome name="camera" size={30} color="#FFF" 
    />
    </TouchableOpacity>
    

    <TouchableOpacity
          style={{alignSelf:'flex-start', margin:5, marginLeft:100}}
          onPress={toggleCameraType}>
          <FontAwesome name="home" size={30} color="#FFF" 
   />
        </TouchableOpacity>

      </View>

      {fotoCapturada &&
      <Modal
      style={{}}
      animationType="slide"
      transparent={false}
      visible={abrirModal}>


        <View style={{flex:1, justifyContent:'center', alignItems:'center', margin:2, backgroundColor:'#fff'}}>
        <Text>Imagem capturada abaixo:</Text>
        <TouchableOpacity style={{margin:10}}
         onPress={ () => {setAbrirModal(false)}}>
         <FontAwesome name="window-close" size={40} color="red"/>
         <Text>Fechar</Text>

        </TouchableOpacity>

        <Image
        style={{width:'100%', height:350, borderRadius:20}}
        source={{uri: fotoCapturada}}
        />

<TouchableOpacity style={{margin:10}}
         onPress={ savePicture }>
         <FontAwesome name="upload" size={40} color="green"/>
         <Text>Salvar</Text>

        </TouchableOpacity>

        </View>

      </Modal>

      }

    </Camera>

 
  </View>;
    
  }
} 



function toggleCameraType() {
  setType((current) => (
    current === CameraType.back ? CameraType.front : CameraType.back
  ));
}

  useEffect(() => {
 
    (async () =>{
      const {status} = await Camera.requestCameraPermissionsAsync();
      setHasPermissao(status === false);
      //setHasPermissao(status);
      console.log(status);
    })();

    (async () =>{
      const {status} = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      setHasPermissao(status === false);
      //setHasPermissao(status);
      console.log(status);
    })();
    

 console.log(permissao)
    }, [atualizar]);




  
  return(
    
      <View style={{ flex:1, backgroundColor:'#000', justifyContent:'center'}}> 


    

      <StatusBar backgroundColor='transparent' style='light' animated={true} translucent={true}/>
        <ImageBackground source={{ uri: props.route.params.item.imagem }} 
        resizeMode='cover' style={styles.image}
        >

<ScrollView >

        <Text style={{fontSize:16 ,textAlign:'center', color:'white', backgroundColor:'rgba(8, 2, 13, 0.6)', width:270, alignSelf:'center', marginTop:100}}>
          {props.route.params.item.descricao}
        </Text>
        
 <Text>
  


 </Text>

{cam(cameraRef)}

</ScrollView>

<Button onPress= {() => {setHasPermissao('granted')} } title="Liberar Acesso" />
      


    


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
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  camera: {
    flex: 1,
    width:'90%',
    height: '900%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',

    
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    margin: 160,
  },
  button: {
    flex:1,
    alignSelf: 'stretch',

   
  },
  button2: {
    flex:1,
    alignSelf: 'flex-end',
   
    
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
})
//<Button onPress={requestPermission} title="Permissao" />