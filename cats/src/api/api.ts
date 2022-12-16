const url = new URL('https://api.thecatapi.com/v1/images/search');

export async function getRandomCat(): Promise<Object> {
    let response = await fetch(url);

    if(!response.ok){
        throw new Error('Error while fetching data from the api')
    }

    let result = response.json()
    console.log(result);
    return result;
}