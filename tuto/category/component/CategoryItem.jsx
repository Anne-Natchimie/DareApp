import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from '../styles'

const CategoryItem = ({category}) => {
    return (
        <TouchableOpacity style={styles.categoryItemContainer} >
            <Text style={styles.categoryItemText} >{category.name}</Text>
        </TouchableOpacity>
    )
}

export default CategoryItem