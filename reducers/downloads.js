import * as MediaLibrary from "expo-media-library";
import * as FileSystem from "expo-file-system";
import * as Permissions from "expo-permissions";

export function downloadFile(imageUrl) {
    const uri = imageUrl;
    let fileName = getSubscrtringBetween(uri, "/", ".jpg");
    let fileUri = FileSystem.documentDirectory + `${fileName}.jpg`;
    // console.log(fileUri);
    FileSystem.downloadAsync(uri, fileUri)
        .then(({ uri }) => {
            saveFile(uri);
            console.log("Finished downloading to ", uri);
        })
        .catch((error) => {
            alert(error.message);
            // console.error(error);
        });
    return fileUri;
}

const saveFile = async (fileUri) => {
    // console.log("inside saveFile: ", fileUri);
    const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    if (status === "granted") {
        const asset = await MediaLibrary.createAssetAsync(fileUri);
        await MediaLibrary.createAlbumAsync("Download", asset, false);
    }
};

export function _handlePressImage(thisobject) {
    console.log("_handlePressImage.");

    var uri = thisobject;
    console.log(uri);
    CameraRoll.saveImageWithTag(
        uri,
        function (result) {
            console.log(result);
        },
        function (error) {
            console.log(error);
        }
    );
}

const getSubscrtringBetween = (fullString, firstChar, secondChar) => {
    return fullString.substring(
        fullString.lastIndexOf(firstChar) + 1,
        fullString.lastIndexOf(secondChar)
    );
};
