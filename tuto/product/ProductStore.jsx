import { View, Text, FlatList } from 'react-native'
import React , { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from 'react-native-paper'
import { stylesProduct } from './stylesProduct'
import { asc, desc, init } from '../redux/product'

import CardProduct from './component/CardProduct'

const ProductStore = () => {

    const products = useSelector(state => state.product)
    const dispatch = useDispatch()

    const ascProduct = () => {
      console.log('asc')
      dispatch(asc())
    }

    const descProduct = () => {
      console.log('desc')
      dispatch(desc())
    }

    const initProduct = () => {
      console.log('init')
      dispatch(init())
    }

    useEffect(() => {
        console.log(" product  load")
    }, [])
    

   // console.log('products' , products) ;
  return (
    <View>
      <Text>Product Store</Text>

      <View style={stylesProduct.contentButtonFilter} >
        <Button onPress={ascProduct}>Asc</Button>
        <Button onPress={descProduct}>Desc</Button>
        <Button onPress={initProduct}>Init</Button>
      </View>

      <FlatList 
        data= { products}
        renderItem={({item}) => <CardProduct product={item} />}
        keyExtractor={item => item.id }
        numColumns="2"
      />

    </View>
  )
}

export default ProductStore