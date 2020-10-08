import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffffff",
        color: "#ffffff",
        alignItems: "center",
        justifyContent: "center",
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",


    },
    logo: {
        width: 150,
        height: 200,
        borderRadius: 5,
        marginHorizontal: 160,
    },
    item: {
        backgroundColor: "#48747Dcc",
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 150,
        borderRadius: 5,
    },
    heading: {
        fontSize: 22,
        fontWeight: "600",
        fontFamily: "helvetica",
        marginBottom: 10,
        color: "#F7E11E",
        textShadowColor: "#000000",
        textShadowOffset: {width: 2, height: 2},
        textShadowRadius: 2,
    },
    title: {
        fontFamily: "helvetica",
        fontSize: 16,
        fontWeight: "600",
        color: "#C2BBAD",
        textShadowColor: "#000000",
        textShadowOffset: {width: 1, height: 1},
        textShadowRadius: 10,
        marginBottom: 10,
        marginHorizontal: 10,


    },
    text: {
        fontSize: 16,
        fontWeight: "400",
        fontFamily: "helvetica",
        color: "#C2BBAD",


    },
    button: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 150,
        alignItems: "center",
        backgroundColor: "#48747Daa",
        fontFamily: "helvetica",
        borderRadius: 5,
        fontSize: 22,
        fontWeight: 600,
        color: "#F7E11E",
        textShadowColor: "#000000",
        textShadowOffset: {width: 2, height: 2},
        textShadowRadius: 2,

    },
});
