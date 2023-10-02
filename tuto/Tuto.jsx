import { View, Text } from 'react-native'
import React from 'react'
import CategoryData from './category/CategoryData'
import CategoryStore from './category/CategoryStore'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import ProductData from './product/ProductData'

const Tuto = () => {
    return (
        <Provider store={store}>
        <View>
        {/* <Text>Tuto</Text> */}
        < CategoryData />
        {/* < CategoryStore /> */}
        < ProductData />
        </View>
        </Provider>
    )
}

export default Tuto