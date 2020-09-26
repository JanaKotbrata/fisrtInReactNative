import {StatusBar} from "expo-status-bar";
import React, {useEffect, useState} from "react";
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ImageBackground,
    FlatList,
    Image,
    LinearGradient,
} from "react-native";


const image = {
    uri:
        "https://images.pexels.com/photos/816608/pexels-photo-816608.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
};
const movieURL =
    "https://raw.githubusercontent.com/RyanHemrick/star_wars_movie_app/master/public/images/";


interface MovieType {
    title?: string;
    episode_number: string;
    main_characters?: [];
    description?: string;
    poster?: string;
    hero_image?: string;
}

interface ItemProps {
    movie: MovieType;
}

function Item(props: ItemProps) {
    return (
        <View style={styles.item}>
            <Text style={styles.heading}>{props.movie.title}</Text>
            <View style={{flex: 1, flexDirection: 'row'}}>
                <Image
                    style={styles.logo}
                    source={{
                        uri: movieURL + props.movie.poster,
                    }}
                />
                <View style={{
                    flex: 1,
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'stretch',
                }}>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={styles.title}>{"EPIZODA:"}</Text>
                        <Text style={styles.text}>{props.movie.episode_number}</Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={styles.title}>{"POPIS:"}</Text>
                        <Text style={styles.text}>{props.movie.description}</Text>
                    </View>
                </View>
            </View>

        </View>

    );
}

function Movies() {
    const [movies, setMovies] = useState<MovieType[]>([]);
    const [asc, setAsc] = useState(true);

    async function fetchMovies() {
        const apiMoviesResponse = await fetch(
            "https://raw.githubusercontent.com/RyanHemrick/star_wars_movie_app/master/movies.json"
        );
        const apiMovies = await apiMoviesResponse.json();
        setMovies(apiMovies.movies);
    }

    useEffect(function () {
        fetchMovies();
    }, []);

    const sorting = [...movies.sort((a: MovieType, b: MovieType) => {
        if (asc) {
            return parseInt(a.episode_number, 10) - parseInt(b.episode_number, 10);
        } else {
            return parseInt(b.episode_number, 10) - parseInt(a.episode_number, 10);
        }
    })];

    function handleChange() {
        setAsc(!asc);
    }


    function renderItem({item}) {
        return <Item movie={item}/>;
    }

    return (

        <View>
            <FlatList data={sorting} extraData={asc} renderItem={renderItem}/>
            <TouchableOpacity style={styles.button} onPress={handleChange}>{"FILTROVAT"}</TouchableOpacity>
        </View>
    );
}

export default function App() {
    return (
        <View style={styles.container}>
            <ImageBackground source={image} style={styles.image}>
                    <Movies/>
            </ImageBackground>
        </View>
    );
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
    logo: {
        width: 150,
        height: 200,
        borderRadius: 5,
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
        fontWeight: 600,
        fontFamily: "helvetica",
        marginBottom: 10,
        color:"#F7E11E",
        textShadowColor: "#000000",
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 2,
    },
    title: {
        fontFamily: "helvetica",
        fontSize: 16,
        fontWeight: 600,
        color:"#C2BBAD",
        textShadowColor: "#000000",
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius:10,
        marginBottom: 10,
        marginHorizontal: 10,


    },
    text: {
        fontSize: 16,
        fontWeight:400,
        fontFamily: "helvetica",
        color:"#C2BBAD",


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
        color:"#F7E11E",
        textShadowColor: "#000000",
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 2,

    },
});
