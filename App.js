import * as React from 'react';
import TextViewStyle from './Components/TextViewStyle';
import { Text, View } from 'react-native-web';
import {Dimensions} from 'react-native';
import BottonComp from './Components/BottonComp';
import DisplayAndFetchData from './Components/DisplayAndFetchData';
import ImageAndTextInput from './Components/ImageAndTextInput';
import FlexLayout from './Components/FlexLayout';
export default function App() {
  const windowHeight = Dimensions.get('window').height;
  const windowWidth = Dimensions.get('window').width;
  return (
    <View style={{height:windowHeight,width:windowWidth,backgroundColor:'pink'}}>
      <Text style={{color:'red',textAlign:'center',padding:10}}>Welcome to React Native</Text>
      {/* <TextViewStyle/> */}
      {/* <BottonComp/> */}
      {/* <DisplayAndFetchData/> */}
      {/* <ImageAndTextInput/> */}
      <FlexLayout/>
    </View>
  );
}
