import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FlexLayout = () => {
  return (
    <View style={{flex:1,backgroundColor:'grey'}}>
        <View style={{flex:2,backgroundColor:'red',justifyContent: "center",alignItems: "center"}}>
            <Text style={{color:'white'}}>FlexLayout 1</Text>
        </View>
        <View style={{flex:1,backgroundColor:'green'}}>
            <Text style={{color:'white'}}>FlexLayout 2</Text>
        </View>
        <View style={{flex:1,backgroundColor:'blue'}}>
            <Text style={{color:'white'}}>FlexLayout 3</Text>
        </View>
    </View>
  )
}

export default FlexLayout

const styles = StyleSheet.create({})