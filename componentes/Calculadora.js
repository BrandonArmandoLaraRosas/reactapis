import { View } from 'react-native'
import React from 'react'
import { estilos } from './Estilos'
import { Boton, Caja } from './Atomicos'

const Calculadora = () => {
  return (
    <View>
      <View>
        <Caja valor={'55'}/>
      </View>
      <View style={estilos.botonesConatainer}>
        <Boton texto={' % '}/>
        <Boton texto={'CE'}/>
        <Boton texto={' C '}/>
        <Boton texto={'<-'}/>
        <Boton texto={'1/x'}/>
        <Boton texto={'x/2'}/>
        <Boton texto={' R '}/>
        <Boton texto={' / '}/>
        <Boton texto={' 7 '}/>
        <Boton texto={' 8 '}/>
        <Boton texto={' 9 '}/>
        <Boton texto={' * '}/>
        <Boton texto={' 4 '}/>
        <Boton texto={' 5 '}/>
        <Boton texto={' 6 '}/>
        <Boton texto={' - '}/>
        <Boton texto={' 1 '}/>
        <Boton texto={' 2 '}/>
        <Boton texto={' 3 '}/>
        <Boton texto={' + '}/>
        <Boton texto={'+/-'}/>
        <Boton texto={' 0 '}/>
        <Boton texto={' . '}/>
        <Boton texto={' = '}/>
      </View>
    </View>
  )
}

export default Calculadora