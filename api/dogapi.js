const BASE_URL = `https://dog.ceo/api/breed`;

export async function getListAllBreeds() {
    const response = await fetch(`https://dog.ceo/api/breeds/list/all`, {
        method: "GET",
        dataType: "json",
    });
    const breeds = await response.json();
    // console.log("List All Breeds: ", breeds.message);
    return Object.keys(breeds.message);
}

export async function getBreedList(breed = "affenpinscher", random = 1) {
    const response = await fetch(`${BASE_URL}/${breed}/images/random/${random}`, {
        method: "GET",
        dataType: "json",
    });
    const photos = await response.json();
    //console.log("Breeds List: ", photos.message);
    return photos.message;
}
