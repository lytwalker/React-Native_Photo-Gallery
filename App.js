import React, { useEffect, useReducer, useCallback } from "react";
import { ActivityIndicator, StyleSheet, View, Text, Button } from "react-native";
import { NavigationContainer, useNavigation, useRoute } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { getBreedList } from "./api/dogapi";
import { actionCreators, initialState, reducer } from "./reducers/photos";
import ImageGrid from "./components/ImageGrid";

const Screen1 = ({ navigation, route }) => {
    return (
        <View style={styles.container}>
            <Button
                title="Go to Screen 2"
                onPress={() => {
                    navigation.push("Screen2", { paramA: "Hello!" });
                }}
            />
        </View>
    );
};
const Screen2 = ({ route }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const { photos, nextPage, loading, error } = state;

    const fetchPhotos = useCallback(async () => {
        dispatch(actionCreators.loading());

        try {
            const nextBreedsListPhotos = await getBreedList("hound", nextPage);
            dispatch(actionCreators.success(nextBreedsListPhotos, nextPage));
        } catch (e) {
            dispatch(actionCreators.failure());
        }
    }, [nextPage]);

    useEffect(() => fetchPhotos(nextPage), []);

    // If Loading
    if (photos.length === 0 && loading) {
        return (
            <View style={styles.container}>
                <ActivityIndicator animating={true} />
            </View>
        );
    }

    // If Error
    if (error) {
        return (
            <View style={styles.container}>
                <Text>Error! Failed to load Images!</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Text>{route.params.paramA}</Text>
            <ImageGrid numColumns={3} photos={photos} onEndReached={fetchPhotos} />
        </View>
    );
};

const Root = createStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Root.Navigator>
                <Root.Screen name="Homepage" component={Screen1} />
                <Root.Screen name="Breeds" component={Screen2} />
            </Root.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});

export default App;
