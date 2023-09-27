import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import styles from '../../styles';
import ItemPlayer from '../component/player/ItemPlayer';
import EmptyPlayer from '../component/player/EmptyPlayer';
import AddPlayer from '../component/player/AddPlayer';
import ResetPlayer from '../component/player/ResetPlayer';
import StartGame from '../component/button/StartGame';

const Players = () => {

  const { players }  = useSelector(state=>state.player);
   console.log('first' , players)
   


  return (
    <View style={styles.container}>
      <FlatList
        data={players}
        renderItem={({ item } ) => <ItemPlayer player={item} /> }
        keyExtractor={item=>item.id}
        ListEmptyComponent={EmptyPlayer}
        ListHeaderComponent={AddPlayer}

      />
      <StartGame />
      <ResetPlayer />
     
    </View>
  )
}

export default Players