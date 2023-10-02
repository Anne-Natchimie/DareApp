import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Route from './src/screens/Route'

import { GestureHandlerRootView } from 'react-native-gesture-handler'
const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Route />
      </GestureHandlerRootView>
  )
}

export default App

const styles = StyleSheet.create({})