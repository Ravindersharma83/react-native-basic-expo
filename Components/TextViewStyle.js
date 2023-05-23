import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import {Dimensions} from 'react-native';

const TextViewStyle = () => {
  const windowWidth = Dimensions.get('window').width;
  const[customWidth,setWidth] = useState(windowWidth);

  return (
    <View style={styles.container}>
     <View style={styles.imageContainer}>
        <Image source={{uri:'https://images.unsplash.com/photo-1684748370133-92f83adba386?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=388&q=80'}} style={styles.image} />
      </View>
      <View>
        <Text style={[styles.view2, styles.view2txt, styles.custWidth(customWidth)]} onPress={()=>{console.log("clicked");}}>Click Here</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  )
}

export default TextViewStyle

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'grey',
      alignItems: 'center',
    },
    imageContainer: {
      flex: 1,
      paddingTop: 48,
    },
    image: {
      width: 320,
      height: 400,
      borderRadius: 18,
    },
    view2:{
      backgroundColor: 'aqua',
      padding:20,
      // width:customWidth,
      marginBottom:5
    },
    custWidth: customWidth=>({
      width:customWidth - 20,
    }),
    view2txt:{
      color:'red',
      fontWeight:'bold'
    }
  });