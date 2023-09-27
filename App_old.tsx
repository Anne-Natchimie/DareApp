import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
} from 'react-native';
import { useSelector } from 'react-redux';
import ItemCategory from './component/ItemCategory';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import styles from './styles';
import DareOrTruth from './screens/DareOrTruth';
import { Header } from 'react-native/Libraries/NewAppScreen';


const Stack = createNativeStackNavigator();

const HomeScreen = () => {
  
  const categories = useSelector(state => state.category)


  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={categories}
        renderItem={({item}) => <ItemCategory id={item.id} name={item.name} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};


const  App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Dareortruth" component={DareOrTruth} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



export default App;