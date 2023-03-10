import { View, Text } from 'react-native'
import React, { useEffect,useState } from 'react'
import StarButton from '../components/StarButton'
import { Button } from 'react-native-paper'


const whenClick=()=>{

}

export default function Home() {
  const [name,setName] = useState(''); 
  const [address,setAddress] = useState(''); 

  //2 moments--->when component render | 
  useEffect(() => {
    console.log("hyyyyyy...");
  },[]);


  return (
    <View>
      <Text>Home</Text>
      <Button onPress={()=>{setName("Yasindu")}}>Click Me To Change State</Button>
    </View>
  )
}