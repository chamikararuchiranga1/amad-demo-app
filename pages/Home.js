import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'

export default function Home() {
  const [data, setData] = useState([]);

  const loadData = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((json) => setData(json));
  }

  //2 moments--->when component render | 
  useEffect(() => {
    loadData();
  }, []);


  return (
    <View>
      <Text>Home</Text>

      <FlatList
        data={data}
        renderItem={({ item }) => {
          return (
            <View style={{ marginBottom: 20 }}>
              <Text >{item.title}</Text>
              <Text>{item.body}</Text>
            </View>
          )
        }}
        keyExtractor={item => item.id}
      />
    </View>
  )
}

