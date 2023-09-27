import { View, Text, FlatList } from 'react-native'
import React, { useEffect , useState} from 'react'
import { Button } from 'react-native-paper'
import { useDispatch, useSelector  } from 'react-redux'
import { updateLoading } from '../redux/loading'
import { loadData } from '../commonjs/db'
import ItemCategory from '../component/ItemCategory'

const Category = ({navigation}) => {

  const [categories, setCategories] = useState([]) ;

  const loading = useSelector(state => state.loading ) ;
  const dispatch = useDispatch() ;

  const loadCategory =  async () => { 

    dispatch(updateLoading()) ;

    const dataCategories = await loadData('category') ;
  
    setCategories( dataCategories ) ;


    dispatch(updateLoading()) ;


   }



  useEffect(() => {
   loadCategory();
  }, [])
  


  return (
    <View>
      <FlatList
        data = {categories}
        renderItem = {({item}) => <ItemCategory category={item }/> }
        keyExtractor = {item => item.id}
      />


    </View>
  )
}

export default Category