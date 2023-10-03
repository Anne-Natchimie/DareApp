import { StyleSheet, Text, View } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { migrate } from './dataStore/migrate'
import { useEffect } from 'react'

import React from 'react'
import Route from './src/screens/Route'

const App = () => {

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Route />
      </GestureHandlerRootView>
  )
}

export default App

const styles = StyleSheet.create({})