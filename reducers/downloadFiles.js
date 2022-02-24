import * as FileSystem from "expo-file-system";

let fileUri = "http://techslides.com/demos/sample-videos/small.mp4";
let fileName = "small";
let fileAbsolutePath = FileSystem.documentDirectory + `${fileName}.mp4`;

const callback = (downloadProgress) => {
    const progress =
        downloadProgress.totalBytesWritten / downloadProgress.totalBytesExpectedToWrite;
    this.setState({
        downloadProgress: progress,
    });
};

const downloadResumable = FileSystem.createDownloadResumable(
    fileUri,
    fileAbsolutePath,
    {}
    // callback
);

export const downloadFileWithUrl = async (imageUrl) => {
    fileUri = imageUrl;
    fileName = getSubscrtringBetween(fileUri, "/", ".jpg");
    fileAbsolutePath = FileSystem.documentDirectory + `${fileName}.jpg`;
    try {
        const { uri } = await downloadResumable.downloadAsync();
        console.log("Finished downloading to ", uri);
    } catch (e) {
        console.error(e);
    }
};

const getSubscrtringBetween = (fullString, firstChar, secondChar) => {
    return fullString.substring(
        fullString.lastIndexOf(firstChar) + 1,
        fullString.lastIndexOf(secondChar)
    );
};
