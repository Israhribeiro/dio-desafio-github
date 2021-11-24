import React, { useState } from 'react'
import { Text, SafeAreaView, TouchableOpacity, StyleSheet } from 'react-native'

const App = () => {

    const [number,setNumber] = useState(0)

    const handleNumber = () => {
        const newNumber = Math.floor(Math.random() * 100)
        setNumber(newNumber)
    }

    return(
        <SafeAreaView style={style.container}>
            <Text style={style.numero}>{number}</Text>
            <TouchableOpacity onPress={handleNumber} style={style.botao}>
                <Text>Gerar Número</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    container: {
        backgroundColor: '#FF0000',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',    
    },
    numero: {
        fontSize: 38,
        color: '#ffffff',
        fontWeight: 'bold'
    },
    botao: {
        backgroundColor: '#ffffff',
        width: '80%',
        paddingHorizontal: 5,
        paddingVertical: 10,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
    }
})

export default App