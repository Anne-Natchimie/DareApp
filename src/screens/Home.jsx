import { View, Text } from 'react-native'
import React from 'react'
import styles from '../../styles'
import { Button } from 'react-native-paper'

const Home = ({navigation}) => {

  return (
    <View style={styles.container}>
      <Button onPress={() => navigation.navigate('players')} >Ajouter un joueur </Button>
    </View>
  )
}

export default Home