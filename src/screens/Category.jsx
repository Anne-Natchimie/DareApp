import { View, Text, FlatList } from 'react-native'
import React, { useEffect , useState} from 'react'
import { Button } from 'react-native-paper'
import { useDispatch, useSelector  } from 'react-redux'
import { updateLoading } from '../redux/loading'
import { loadData } from '../commonjs/db'
import ItemCategory from '../component/ItemCategory'

import AppIntroSlider from 'react-native-app-intro-slider';

const slides = [
  {
    key: 'one',
    title: 'Title 1',
    text: 'Description.\nSay something cool',
   // image: require('./assets/1.jpg'),
    backgroundColor: '#880E4F',
  },
  {
    key: 'two',
    title: 'Title 2',
    text: 'Other cool stuff',
   // image: require('./assets/2.jpg'),
    backgroundColor: '#01579B',
  }
];

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
  
      <AppIntroSlider
        data = {categories}
        renderItem = {({item}) => <ItemCategory category={item }/> }
        keyExtractor = {item => item.id}
      />

  )
}

export default Category