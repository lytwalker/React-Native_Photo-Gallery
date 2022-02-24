import React from "react";
import { Dimensions, StyleSheet, SafeAreaView, View, Image, Text, Button } from "react-native";

import { downloadFile, _handlePressImage } from "../reducers/downloads";
// import { downloadFileWithUrl } from "../reducers/downloadFiles";

const DogDetails = ({ navigation, route }) => {
    const _height = Dimensions.get("window").height / 2;
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.buttonContainer}>
                <Button style={styles.button} title="Share" onPress={() => {}} />
            </View>

            <Image
                style={styles.bigImage}
                source={{ uri: route.params.dogUrl, width: "100%", height: _height }}
            />

            <View style={styles.buttonContainer}>
                <Button
                    style={styles.button}
                    title="Download"
                    color="green"
                    onPress={() => {
                        // _handlePressImage(route.params.dogUrl);
                        // downloadFileWithUrl(route.params.dogUrl);
                        downloadFile(route.params.dogUrl);
                    }}
                />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    bigImage: {
        width: "100%",
        maxWidth: 600,
    },
    text: {
        display: "none",
    },
    buttonContainer: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-around",
    },
    button: {
        flex: 1,
        flexDirection: "row",
        display: "none",
        margin: 10,
    },
});

export default DogDetails;
