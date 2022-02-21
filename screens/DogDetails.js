import React from "react";
import { Dimensions, StyleSheet, SafeAreaView, Image, Text, Button } from "react-native";

import downloadFile from "../reducers/downloads";

const DogDetails = ({ navigation, route }) => {
    const size = Dimensions.get("window").width / 2;
    return (
        <SafeAreaView style={styles.container}>
            <Image
                style={styles.bigImage}
                source={{ uri: route.params.dogUrl, width: size, height: size }}
            />
            <Text style={styles.listItemText}>{route.params.dogUrl}</Text>

            <Button
                title="Save"
                onPress={() => {
                    downloadFile();
                }}
            />
            <Button title="Share" onPress={() => {}} />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
});

export default DogDetails;
