import { FlatList, StyleSheet, Text, View,ScrollView, TouchableOpacity , TouchableHighlight, TouchableWithoutFeedback, Pressable} from 'react-native'
import React from 'react'
import Products from '../DummyData'

// const DisplayProducts = ({item})=>{
//     return (
//         <ScrollView>
//             <Text style={{padding:20,backgroundColor:'grey',margin:20}}>{item.title}</Text>
//         </ScrollView>
//     )
// }

const DisplayAndFetchData = () => {
    console.log(Products);
    const DisplayProducts = ({item})=>{
        return (
        <ScrollView>
            <TouchableOpacity onPress={()=>alert(item.id)}>
                <Text style={{padding:20,backgroundColor:'grey',margin:20}}>{item.title} - ({item.brand})</Text>
            </TouchableOpacity>
            {/* <TouchableHighlight onPress={()=>alert(item.id)}>
                <Text style={{padding:20,backgroundColor:'grey',margin:20}}>{item.title} - ({item.brand})</Text>
            </TouchableHighlight>
            <TouchableWithoutFeedback onPress={()=>alert(item.id)}>
                <Text style={{padding:20,backgroundColor:'grey',margin:20}}>{item.title} - ({item.brand})</Text>
            </TouchableWithoutFeedback> */}
            {/* <Pressable onPress={()=>alert(item.id)} onPressOut={()=>alert("pressed out")}>
                <Text style={{padding:20,backgroundColor:'grey',margin:20}}>{item.title} - ({item.brand})</Text>
            </Pressable> */}
        </ScrollView>
        )
    }
  return (
    <View>
      <Text>DisplayAndFetchData</Text>
      {/* <FlatList
        keyExtractor={(item) => item.id}
        data={Products}
        renderItem={DisplayProducts}
        horizontal
        showsHorizontalScrollIndicator={false}
      /> */}
      <FlatList
        keyExtractor={(item) => item.id}
        data={Products}
        renderItem={DisplayProducts}
        showsVerticalScrollIndicator={false}
        onRefresh={()=> {console.log("Data refreshed");}}
        refreshing={false}
      />
    </View>
  )
}

export default DisplayAndFetchData

const styles = StyleSheet.create({})