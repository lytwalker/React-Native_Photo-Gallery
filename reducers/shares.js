import React from "react";
import * as ImagePicker from "expo-image-picker";
import * as Sharing from "expo-sharing";

export const openImagePickerAsync = async () => {
    let result = "";
    try {
        let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();

        if (permissionResult.granted === false) {
            alert("Permission to access camera roll is required!");
            return;
        }

        let pickerResult = await ImagePicker.launchImageLibraryAsync();
        if (pickerResult.cancelled === true) {
            return;
        }

        result = pickerResult.uri;
    } catch (e) {
        alert(e.message);
        result = e.message;
    }

    return result;
};

export const openShareDialogAsync = async (fileUri) => {
    let result = "";
    try {
        if (!(await Sharing.isAvailableAsync())) {
            alert("Your device is not able to share files.");
            return;
        }

        if (fileUri === null)
            throw new Error("You must download the image first, before you can share it.");
        else result = await Sharing.shareAsync(fileUri);
    } catch (e) {
        alert(e.message);
        result = e.message;
    }

    return result;
};
