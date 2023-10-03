
import firestore from '@react-native-firebase/firestore';

export const loadData = async (collectionName) => {

    const snapShot = await firestore().collection(collectionName).get()

    // vérification des données 
    if(!snapShot.empty){

        const datas = snapShot.docs.map(doc=>{
                                    return { id:doc.id , ...doc.data() }
                                })

            return datas 
    } else {
        return []
    }

}

/* 
*** Cette fonction récupère la liste des questions et actions en fonction de l'identifiant de la category 
** params (id<string> : id category)
*/ 
export const loadDataDareOrThruth = async (id, type) => {

    console.log('loadDataDareOrThruth', id)

    const snapShot = await firestore()
                            .collection("TruthOrDare")
                            .where('category',"==", id)
                            .where('type',"==", type)
                            .get()

    if(!snapShot.empty){

        const datas = snapShot.docs.map(doc=>{
                                    return { id:doc.id , ...doc.data() }
                                })

            return datas 
    } else {
        return []
    }

}
