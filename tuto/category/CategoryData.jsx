import { View, Text, FlatList } from 'react-native'
import React from 'react'
import styles from './styles'
import CategoryItem from './component/CategoryItem'

const categories = [{id:1, name:'All'},
                    {id:1, name:'Php'},
                    {id:1, name:'Js'},
                    {id:1, name:'Dot.net'},]

const CategoryData = () => {
    return (
        <View style={styles.container} >
        <Text style={styles.bigTitle} >Category Data</Text>
        <FlatList
            data={categories}
            renderItem={({item})=> <CategoryItem category={item} />}
            keyExtractor={item => item.id}
            horizontal={true}
        />
        </View>
    )
}

export default CategoryData