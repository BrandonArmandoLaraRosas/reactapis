import { Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { Boton } from './Atomicos'
import { StyleSheet } from 'react-native'
const Imc = () => {
  const [peso,setPeso]=useState(0)
  const [altura,setAltura]=useState(0)
  const [res,setRes]=useState(0)
  return (
    <View>
        <Text>Calculadora IMC</Text>
        <Text>Captura el peso...</Text>
        <TextInput placeholder='Peso en kg...'
        inputMode='numeric'
        onChangeText={(x)=>{setPeso(parseFloat(x))}}/>
        <Text>Captura la estatura</Text>
        <TextInput placeholder='Estatura en M...'
        inputMode='numeric'
        onChangeText={(x)=>{setAltura(parseFloat(x))}}/>
        <Boton
        texto={'Calcular'}
        accion={()=>setRes(calculo(peso,altura))}/>
        <Text>Resultado : {res}</Text>
    </View>
  )
}


const calculo=(p,a)=>{
  return p/(a*a)
}

export default Imc

const styles = StyleSheet.create({})

