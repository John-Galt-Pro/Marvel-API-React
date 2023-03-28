class MarvelService {
    getResource = async (url) => {

        let res = await fetch(url);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }

        return await res.json();
    }

    getAllCharacters = () => {
        return this.getResource('https://gateway.marvel.com:443/v1/public/characters?apikey=7a935a147a1343a1ea2d7dc3d8ae74dd');
    }
}

export default MarvelService;








