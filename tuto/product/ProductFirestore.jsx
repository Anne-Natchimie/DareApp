import { View, Text } from 'react-native'
import { useState } from 'react'
import { useEffect } from 'react'
import { FlatList } from 'react-native'

import React from 'react'
import firestore from '@react-native-firebase/firestore'
import CardProduct from './component/CardProduct'

const ProductFirestore = () => {

    const [products, setProducts] = useState([])

    const init = async () => {
        const snapData = await firestore().collection('product').get()
        console.log('snapData', snapData)

        const dataProducts = snapData.docs.map(product => {
            const newData = {...product.data(), id: product.id}
            return newData
        })

    }

    useEffect(() => {
        console.log('component load')
        init()
    }, [])
    

    return (
        <View>
        <Text>ProductFirestore</Text>
        <FlatList 
            data={products}
            renderItem={({item}) => <CardProduct product={item} />} 
            keyExtractor={item => item.id}
        />

        </View>
    )
}

export default ProductFirestore