import React from "react";
import {ImageBackground, StyleSheet, Text, View} from "react-native";
import {ItemProps} from "./Movies";
import {StackScreenProps} from "@react-navigation/stack";

const movieURL =
    "https://raw.githubusercontent.com/RyanHemrick/star_wars_movie_app/master/public/images/";

export default function MovieDetail(props: StackScreenProps<ItemProps, "movie">) {
    return (
        <View style={styles.container}>
            <ImageBackground source={movieURL + props.route.params.movie.hero_image} style={styles.image}>
                <View style={styles.item}>
                    <View style={[{flexDirection: 'row'}, {alignItems:'center'}]}>
                        <Text style={styles.heading}>{"EPIZODA "}</Text>
                        <Text style={styles.heading}>{props.route.params.movie.episode_number}</Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={styles.title}>{"POSTAVY:"}</Text>
                        <Text style={styles.text}>{props.route.params.movie.main_characters.join(', ')}</Text>
                    </View>
                    <View style={[{flexDirection: 'row'}, {marginVertical:10}]}>
                        <Text style={styles.title}>{"POPIS:"}</Text>
                        <Text style={[styles.text,{paddingLeft:25}]}>{props.route.params.movie.description}</Text>
                    </View>
                </View>
            </ImageBackground>
        </View>
    )
}

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

    item: {
        backgroundColor: "rgba(78,78,78,0.5)",
        padding: 20,
        marginVertical: 10,
        marginHorizontal: 50,
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
        color: "#e5e5e4",
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
        color: "#e5e5e4",
        textShadowColor: "#000000",
        textShadowOffset: {width: 2, height: 2},
        textShadowRadius: 5,
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",


    },
});
