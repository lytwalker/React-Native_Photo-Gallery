import React from "react";
import { Dimensions, FlatList, Image } from "react-native";

import { formatPhotoUri } from "../api/dogapi";

export default function ImageGrid({ photos, numColumns, onEndReached }) {
    const { width } = Dimensions.get("window");

    const size = width / numColumns;

    return (
        <FlatList
            data={photos}
            keyExtractor={(item, index) => index}
            numColumns={numColumns}
            onEndReached={onEndReached}
            renderItem={({ item, index }) => (
                <Image
                    source={{
                        width: size,
                        height: size,
                        uri: `${formatPhotoUri(item, index, size, size)}`,
                    }}
                />
            )}
        />
    );
}
