import { View, Text , FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ActivityIndicator, Button } from 'react-native-paper'

import CardProduct from './component/CardProduct'

const ProductApi = () => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [loadingMore, setLoadingMore] = useState(false)
 // const [skip, setSkip] = useState(0)

    const init = async () => {

        console.log('init')

        const res = await fetch('https://dummyjson.com/products?limit=2&skip=0') // Récupérations des éléments de l'api
        const productsData = await res.json() // Attente de la réponse du json

        console.log('products :' , productsData)

        setProducts(productsData.products)
        setLoading(false) // Fin du chargement

    }

    const more = async () => {

        console.log('more')
        setLoadingMore(true)

        const nextSkip = products.length + 1
        const res = await fetch('https://dummyjson.com/products?limit=2&skip=' + nextSkip) // Récupérations des éléments de l'api
        const productsData = await res.json() // Attente de la réponse du json
        const moreProducts = productsData.products
        const newProducts = [...products, ...moreProducts]

        setProducts(newProducts)
        console.log(newProducts)
        setLoadingMore(false)
    }

    useEffect(() => {
        init()
    }, [])


return (
    <View>
        <Text>ProductApi</Text>
        { loading ? <ActivityIndicator size={20} animating={true}/> :
            <FlatList 
                data={products}
                renderItem={({item})=><CardProduct product={item}/>}
                keyExtractor={item => item.id}
                numColumns={"2"}
                ListFooterComponent={loadingMore    ? <ActivityIndicator animating={true}/> 
                                                    : <Button onPress={more}>More</Button> }
                                                    onEndReached={more}
                                                    onEndReachedThreshold={0.3}
            />
        }
    </View>
)
}

export default ProductApi