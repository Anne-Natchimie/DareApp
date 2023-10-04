import { StyleSheet, Dimensions } from "react-native";

const width = Dimensions.get("window").width

export const stylesProduct = StyleSheet.create({
    container:{
        paddingHorizontal: 10, 
    },
    cardContent:{
        backgroundColor: "#fff",
        width: (width - (10 * 2) - (5 * 4))/ 2,
    },
    cardProduct:{
        margin: 5, 
    },
    cardTitle:{
        fontSize: 15, 
        color: "orange",
        fontWeight: "600",
        marginTop: 8,
    },
    cardPrice:{
        fontSize: 14, 
        color: "orange",
        fontWeight: "500",
    },
    contentButtonFilter:{
        // backgroundColor: "red",
        flexDirection: "row",
    },
})