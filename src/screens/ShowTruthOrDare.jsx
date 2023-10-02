import { View, Text } from 'react-native'
import { useSelector} from 'react-redux'
import { loadDataDareOrThruth } from '../commonjs/db'
import { getRandomIndex } from '../commonjs/function'
import React, { useEffect, useState } from 'react'

import NextPlayer from '../component/button/NextPlayer'

const ShowTruthOrDare = ({route}) => {

  const { id } = route.params
  const [showtod, setShowtod] = useState()
  const { players , position } = useSelector( state => state.player)

  const loadDareOrTruth = async () => {

    console.log('load')
    const dataTruthOrDare = await loadDataDareOrThruth(id)
    console.log('dataTruthOrDare', dataTruthOrDare)
    const index = getRandomIndex(0, dataTruthOrDare.length)
    console.log(index)

    setShowtod(dataTruthOrDare[index])

  }

  useEffect(() => {
    loadDareOrTruth()
  }, [])
  

  return (
    <View>
      <Text>{players[position].name}</Text>
      <Text>{showtod?.title}</Text>
      <NextPlayer id={id} />
    </View>
  )
}

export default ShowTruthOrDare