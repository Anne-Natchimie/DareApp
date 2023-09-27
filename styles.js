import { StyleSheet , StatusBar} from "react-native"; 

export default  StyleSheet.create({
    container: {
      flex: 1,
      margin:10,
      marginTop: StatusBar.currentHeight || 0,
    },
    modal:{
      backgroundColor: 'white', 
      padding: 20,
    } ,
    
    item: {
      backgroundColor: '#f9c2ff',
      padding: 10,
      marginVertical: 2,
      marginHorizontal: 16,
      borderRadius:50,
    },
    title: {
      fontSize: 22,
    },
  });