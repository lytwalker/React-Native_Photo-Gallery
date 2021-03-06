import React, { useEffect, useReducer, useCallback, useState, useLayoutEffect } from "react";
import { ActivityIndicator, StyleSheet, SafeAreaView, Text } from "react-native";

import { getBreedList } from "../api/dogapi";
import { actionCreators, initialState, reducer } from "../reducers/photos";
import ImageGrid from "../components/ImageGrid";

const ByBreed = ({ navigation, route }) => {
    const [value, onChangeText] = useState(route.params.breed);

    useLayoutEffect(() => {
        navigation.setOptions({
            title: value === "" ? "No title" : value,
        });
    }, [navigation, value]);

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
            <SafeAreaView style={styles.container}>
                <ActivityIndicator animating={true} />
            </SafeAreaView>
        );
    }

    // If Error
    if (error) {
        return (
            <SafeAreaView style={styles.container}>
                <Text>Error! Failed to load Images!</Text>
            </SafeAreaView>
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            <ImageGrid
                numColumns={3}
                photos={photos}
                onEndReached={fetchPhotos}
                navigation={navigation}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        fontSize: 20,
        textAlign: "center",
        textTransform: "capitalize",
        position: "absolute",
        zIndex: 1,
        margin: 10,
    },
});

export default ByBreed;
