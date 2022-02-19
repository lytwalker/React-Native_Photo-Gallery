const BASE_URL = `https://dog.ceo/api/breed`;

export async function getBreedList(breed = "affenpinscher", page = 1) {
    const response = await fetch(`${BASE_URL}/${breed}/images?page=${page}`, {
        method: "GET",
        dataType: "json",
    });
    const photos = await response.json();
    // console.log("Breeds list: ", photos.message);
    return photos.message;
}

export function formatPhotoUri(imageurl, index, width, height) {
    return imageurl;
}
