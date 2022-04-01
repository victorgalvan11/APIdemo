window.onload = () => {
    document.querySelector("#submit").addEventListener("click",getNewPokemon);
}

function getNewPokemon(event){
    /*
        1. Make a call to a API DONE
        2. Wate for the api to respond DONE
        3. Get there response data DONE
        4. Put the response data in the html
    */
    
    let pokemonName = document.querySelector("#pokemon-input").value;

    getPokemon(pokemonName).then(resultjson =>{
        populateHTML(resultjson);
    });
}

async function getPokemon(pokemonName){
    let endpoint = "https://pokeapi.co/api/v2/pokemon/" + pokemonName;
    let req = new Request(endpoint);
    let response = await fetch(req);
    return response.json();
}

function populateHTML(pkmJson) {
    let header = document.querySelector('#pokemon-name');
    let img = document.querySelector('#pokemon-sprite');

    header.innerHTML = getPokemonName(pkmJson);
    console.log(getPokemonSprite(pkmJson))
    img.setAttribute("src", getPokemonSprite(pkmJson));
}

function getPokemonName(pkmJson){
    return capitalize(pkmJson.name);
}

function getPokemonSprite(pkmJson){
    return pkmJson.sprites.front_default;
}

function capitalize(string){
    let start = string.substring(0,1).toUpperCase();
    let body = string.substring(1).toLowerCase();

    return start + body;
}