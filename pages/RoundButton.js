import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

export default function RoundButton() {
    const saveData = () => {
        fetch('http://192.168.1.83:3000/customer', {
            method: 'POST',
            body: JSON.stringify({
                id: 'foo',
                name: 'bar',
                address: 1,
                salary:''
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => console.log(json));
    }

    return (
        <TouchableOpacity onPress={() => { console.log("Roud btn pressed !"); }} style={{ backgroundColor: 'red', width: 100, height: 100, borderRadius: 100, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Click Me</Text>
        </TouchableOpacity>
    )
}