import { View, Text } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'
import { useSelector } from 'react-redux'

const TruthOrDare = ({navigation , route}) => {

  const { id } = route.params ;
  


  return (
    <View>
      <Text>TruthOrDare</Text>
      <Button mode='contained' onPress={ () => navigation.navigate('showtruthordare', { id: id , type:'dare'})} >Action</Button>
    
      <Button mode='contained' onPress={ () => navigation.navigate('showtruthordare' , { id: id , type:'dare'})} >Vérité</Button>
    
    </View>
  )
}

export default TruthOrDare