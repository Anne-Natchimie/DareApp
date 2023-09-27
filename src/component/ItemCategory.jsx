import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { List } from 'react-native-paper';

const ItemCategory = ({category}) => {

    const navigation = useNavigation();
    
    return(
            <List.Item
                title={category.name}
                onPress={() => navigation.navigate('truthordare' , {id: category.id})}
            
            
            
            />
            )
};

export default ItemCategory;