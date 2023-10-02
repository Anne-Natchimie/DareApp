import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { Button, List } from 'react-native-paper';
import { View , Text , Image} from 'react-native';
import styles from '../../styles';

const ItemCategory = ({category}) => {

    const navigation = useNavigation();
    console.log("category" , category)
    
    /* return(
            <List.Item
                title={category.name}
                onPress={() => navigation.navigate('truthordare' , {id: category.id})}
            
            
            
            />
            )*/


            return (
                <View style={[
                            styles.slide ,
                            {
                                backgroundColor: category.color != undefined ? category.color : "#000",
                            },
                            ]}>
                    <Text style={styles.slideTitle}>{category.name}</Text>
                </View>
            );
};

export default ItemCategory;