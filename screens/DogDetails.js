import React, { useState } from "react";
import { Dimensions, StyleSheet, SafeAreaView, View, Image, Text, Button } from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as Sharing from "expo-sharing";

import { downloadFile, _handlePressImage } from "../reducers/downloads";
// import { downloadFileWithUrl } from "../reducers/downloadFiles";
import { openImagePickerAsync, openShareDialogAsync } from "../reducers/shares";

const DogDetails = ({ navigation, route }) => {
    let [selectedImage, setSelectedImage] = useState(route.params.dogUrl);
    const _height = Dimensions.get("window").height / 2;
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.buttonContainer}>
                <Button
                    style={styles.button}
                    title="Share"
                    onPress={() => {
                        // console.log("selectedImage: ", selectedImage);
                        if (selectedImage.localUri === undefined)
                            alert("Please download the image first.");
                        else openShareDialogAsync(selectedImage.localUri);
                    }}
                />
            </View>

            <Image
                style={styles.bigImage}
                source={{ uri: selectedImage, width: "100%", height: _height }}
            />

            <View style={styles.buttonContainer}>
                <Button
                    style={styles.button}
                    title="Download"
                    color="green"
                    onPress={async () => {
                        // _handlePressImage(route.params.dogUrl);
                        // downloadFileWithUrl(route.params.dogUrl);
                        try {
                            let downloadFileLocalUri = await downloadFile(route.params.dogUrl);
                            await setSelectedImage({ localUri: downloadFileLocalUri });
                        } catch (e) {
                            alert(e.message);
                        }
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
