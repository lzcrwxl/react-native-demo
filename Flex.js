import React, { Component, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button
} from 'react-native';

export default function Flex ({initialCount}) {
  const [count, setCount] = useState(initialCount)

  return (
    <View style={styles.container}>
      <Text style={[styles.text, { backgroundColor: 'red', textAlign: 'center' }]}>{count}</Text>
      <Button title="重置" onPress={()=>setCount(initialCount)}></Button>
      <Button title="增加" onPress={()=>setCount(count+1)}></Button>
      <Button title="减少" onPress={()=>setCount(count-1)}></Button>
      {/* <Button title="点击" onPress={this.handelClick} color="#841584"></Button> */}
      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 500,
    margin: 10,
    backgroundColor: 'gray'
  },
  text: {
    fontSize: 20, margin: 20
  }
})
