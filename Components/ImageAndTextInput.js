import { StyleSheet, Text, View , Image, ImageBackground, Button, ToastAndroid,TextInput} from 'react-native'
import React, { useState } from 'react'

const ImageAndTextInput = () => {
    const [name,setName] = useState('');
    const [num,setnum] = useState('');
  return (
    <View>
      <Text>ImageAndTextInput</Text>
      {/* <Image source={require('../assets/mobile.jpg')} style={{height:300}}/> */}
      {/* <Image source={{uri:'https://images.unsplash.com/photo-1684748370133-92f83adba386?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=388&q=80'}} style={{height:200}} /> */}
      <ImageBackground source={{uri:'https://images.unsplash.com/photo-1684748370133-92f83adba386?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=388&q=80'}} style={{height:200}}>
        <Text style={{fontWeight:'bold', color:'#fff',alignSelf:'center'}}>Text on a Background Image</Text>

        <Button title='Display Toast' color='purple' onPress={()=>ToastAndroid.show("This is Toast Message",ToastAndroid.SHORT)}/>
      </ImageBackground>

      <Text style={{fontWeight:'bold',textAlign:'center'}}>Input Field</Text>

      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder='Write your Name'
        onPress={()=>{console.log("Hello")}}
      />
        <TextInput
        style={styles.input}
        value={num}
        onChangeText={setnum}
        placeholder='Write your Number'
        onPress={()=>{console.log("Hello")}}
        keyboardType='numeric'
      />
    </View>
  )
}

export default ImageAndTextInput

const styles = StyleSheet.create({
    input:{
        height:42,
        borderWidth:1,
        borderColor:'#000',
        margin:12,
        padding:10
    }
})