import React from "react";
import { Dimensions, StyleSheet, SafeAreaView, Image, Text, Button } from "react-native";

import { downloadFile, _handlePressImage } from "../reducers/downloads";

const DogDetails = ({ navigation, route }) => {
    const _height = Dimensions.get("window").height / 2;
    return (
        <SafeAreaView style={styles.container}>
            <Image
                style={styles.bigImage}
                source={{ uri: route.params.dogUrl, width: "100%", height: _height }}
            />
            <Text style={styles.text}>{route.params.dogUrl}</Text>

            <Button
                style={styles.button}
                title="Download"
                color="green"
                onPress={() => {
                    // _handlePressImage(route.params.dogUrl);
                    downloadFile(route.params.dogUrl);
                }}
            />
            <Button style={styles.button} title="Share" onPress={() => {}} />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
    },
    bigImage: {
        width: "100%",
        maxWidth: 600,
        position: "absolute",
    },
    text: {
        display: "none",
    },
    button: {
        flex: 1,
        flexDirection: "row",
        display: "none",
        margin: 10,
    },
});

export default DogDetails;
