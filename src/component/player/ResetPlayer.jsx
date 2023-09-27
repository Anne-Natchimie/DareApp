import { View, Text } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'
import { useDispatch } from 'react-redux'
import { resetPlayer } from '../../redux/player'

const ResetPlayer = () => {

  const dispatch = useDispatch() ;

  const reset = () => { 
    
    dispatch(resetPlayer()) ;

   }

  return (
  <Button onPress={reset} >Vider la liste</Button>
  )
}

export default ResetPlayer