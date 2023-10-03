import {data} from "./data"
import firestore from "@react-native-firebase/firestore"

export const migrate = async () => {
    console.log("start migrate")

    data.map(async (item) => {

        await firestore().collection('TruthOrDare').add(item)
        console.log(item.title)

    })
}