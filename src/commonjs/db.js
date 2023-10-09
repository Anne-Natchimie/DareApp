
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
*** Cette fonction récupère la liste des questions et actions en fonction de l'identifiant de la category et du type
** params (id<string> : id category)
*/ 
export const loadDataDareOrTruth = async (id, type) => {

    const snapShot = await firestore()
                            .collection("TruthOrDare")
                            .where('category',"==", id)
                            .where('type',"==", type)
                            .get()

    if(!snapShot.empty){

        const datas = snapShot.docs.map(doc=>{
                                    return { id:doc.id , ...doc.data() }
                                })
                                // .filter(item => item.category==id)

            return datas 
    } else {
        return []
    }

}

/* 
*** Cette fonction récupère la liste des questions et actions en fonction de l'identifiant de la category et du type
** params (id<string> : id category)
*/ 
export const loadDataDareOrTruthTod = async (id, type, tod) => {

    console.log('tod', tod.length)

    const snapShot = await firestore()
                            .collection("TruthOrDare")
                            .where('category',"==", id)
                            .where('type',"==", type)
                            .where(firestore.FieldPath.documentId(), "not-in", ["ok"])
                            .get()

    if(!snapShot.empty){

        const datas = snapShot.docs.map(doc=>{
                                    return { id:doc.id , ...doc.data() }
                                })
                                // .filter(item => item.category==id)

            return datas 
    } else {
        return []
    }

}
