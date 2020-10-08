import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Movies from "./screens/Movies";
import MovieDetail from "./screens/MovieDetail";



const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Movie" component={Movies} />
                <Stack.Screen name="MovieDetail" component={MovieDetail} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

