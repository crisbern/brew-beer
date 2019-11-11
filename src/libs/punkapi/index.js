const endpoint= 'https://api.punkapi.com/v2';

export const getBeer = async (id)=>{
    if(isNan(parseInt(id, 10)) && id!== 'random')
        throw Error('id needs to be an integer or the word random');
    return fetch(`${endpoint}/beers/${id}`)
        .then(function(response) {
            return response.json();
        });
}

export default getAllBeers = async ()=>{
    return fetch(`${endpoint}/beers`)
        .then(function(response) {
            return response.json();
        });
}
