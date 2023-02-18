import { View, Text } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper';

export default function About() {
    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 1, flexDirection: 'row' }}>
                <View style={{ backgroundColor: '#30E3DF', flex: 1 }}>

                </View>

                <View style={{ backgroundColor: 'green', flex: 1 }}>

                </View >
            </View>

            <View style={{ flex: 2, flexDirection: 'row' }}>

                <View style={{ backgroundColor: 'red', flex: 1 }}>

                </View>

                <View style={{ backgroundColor: 'green', flex: 1 }}>

                </View >

                <View style={{ backgroundColor: 'brown', flex: 4 }}>

                </View>

                <View style={{ backgroundColor: 'blue', flex: 1 }}>

                </View>
            </View>
        </View>
    )
}