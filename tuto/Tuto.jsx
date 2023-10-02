import { View, Text } from 'react-native'
import React from 'react'
import CategoryData from './category/CategoryData'
import CategoryStore from './category/CategoryStore'
import { Provider } from 'react-redux'
import { store } from './redux/store'

const Tuto = () => {
    return (
        <Provider store={store}>
        <View>
        <Text>Tuto</Text>
        < CategoryData />
        < CategoryStore />
        </View>
        </Provider>
    )
}

export default Tuto