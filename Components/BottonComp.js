import { ActivityIndicator, Alert, Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

const BottonComp = () => {
    const[activity,setActivity] = useState(false);
  return (
    <View>
      {/* <Button title='click me' onPress={()=>{alert("Welcome Ravinder")}} color='purple'/> */}
      <Button title='click me' onPress={()=>setActivity(!activity)} color='purple'/>
      {activity ? <ActivityIndicator size='large' color='blue'></ActivityIndicator> : ''}
    </View>
  )
}

export default BottonComp

const styles = StyleSheet.create({})