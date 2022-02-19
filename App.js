import React, { useEffect, useReducer, useCallback } from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

import { getBreedList } from "./api/dogapi";
import { actionCreators, initialState, reducer } from "./reducers/photos";
import ImageGrid from "./components/ImageGrid";

export default function App() {
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

    if (photos.length === 0 && loading) {
        return (
            <View style={styles.container}>
                <ActivityIndicator animating={true} />
            </View>
        );
    }

    if (error) {
        return (
            <View style={styles.container}>
                <Text>Error! Failed to load Images!</Text>
            </View>
        );
    }

    return <ImageGrid numColumns={3} photos={photos} onEndReached={fetchPhotos} />;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
