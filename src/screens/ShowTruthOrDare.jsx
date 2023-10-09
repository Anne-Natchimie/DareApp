import { View, Text } from 'react-native'
import { useDispatch, useSelector} from 'react-redux'
import { loadDataDareOrTruth, loadDataDareOrTruthTod } from '../commonjs/db'
import { getRandomIndex } from '../commonjs/function'
import React, { useEffect, useState } from 'react'

import NextPlayer from '../component/button/NextPlayer'
import { updateTod } from '../redux/player'

const ShowTruthOrDare = ({route}) => {

  const { id, type } = route.params
  const [showtod, setShowtod] = useState()
  const { players , position } = useSelector( state => state.player)
  const dispatch = useDispatch()

  const loadDareOrTruth = async () => {

    console.log("players", players[position].tod)
    const { tod } = players[position]

    if (tod.length == 0) {

      // console.log('load')
      const dataTruthOrDare = await loadDataDareOrTruth(id, type)
      // console.log('dataTruthOrDare', dataTruthOrDare)
      const index = getRandomIndex(0, dataTruthOrDare.length)
      // console.log(index)

      setShowtod(dataTruthOrDare[index])

      // Enregistrement du tod du player dans le store
      dispatch(updateTod(dataTruthOrDare[index].id))


    } else {

      // console.log('load')
      const dataTruthOrDare = await loadDataDareOrTruthTod(id, type, tod)
      // console.log('dataTruthOrDare', dataTruthOrDare)
      const index = getRandomIndex(0, dataTruthOrDare.length)
      // console.log(index)

      setShowtod(dataTruthOrDare[index])

      // Enregistrement du tod du player dans le store
      dispatch(updateTod(dataTruthOrDare[index].id))

    }

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