import React, { useEffect, useReducer, useCallback } from "react";
import { ActivityIndicator, Dimensions, StyleSheet, View, Image, Text, Button } from "react-native";
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
                    navigation.push("Breed List", { breed: "african" });
                }}
            />
        </View>
    );
};
const Screen2 = ({ navigation, route }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const { photos, nextPage, loading, error } = state;

    const fetchPhotos = useCallback(async () => {
        dispatch(actionCreators.loading());

        try {
            const nextBreedsListPhotos = await getBreedList(route.params.breed, nextPage);
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
            <Text>{route.params.breed}</Text>
            <ImageGrid
                numColumns={3}
                photos={photos}
                onEndReached={fetchPhotos}
                navigation={navigation}
            />
        </View>
    );
};

const Screen3 = ({ navigation, route }) => {
    const size = Dimensions.get("window").width / 2;
    return (
        <View style={styles.container}>
            <Image
                style={styles.bigImage}
                source={{ uri: route.params.dogUrl, width: size, height: size }}
            />
            <Text style={styles.listItemText}>{route.params.dogUrl}</Text>

            <Button title="Save" onPress={() => {}} />
            <Button title="Share" onPress={() => {}} />
        </View>
    );
};

const Root = createStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Root.Navigator>
                <Root.Screen name="Welcome" component={Screen1} />
                <Root.Screen name="Breed List" component={Screen2} />
                <Root.Screen name="Dog" component={Screen3} />
            </Root.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#eee",
        alignItems: "center",
        justifyContent: "center",
    },
    bigImage: {},
});

export default App;
