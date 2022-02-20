const BASE_URL = `https://dog.ceo/api/breed`;

export async function getBreedList(breed = "affenpinscher", random = 10) {
    const response = await fetch(`${BASE_URL}/${breed}/images/random/${random}`, {
        method: "GET",
        dataType: "json",
    });
    const photos = await response.json();
    // console.log("Breeds list: ", photos.message);
    return photos.message;
}
