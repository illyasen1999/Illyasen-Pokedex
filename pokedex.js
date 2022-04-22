// w/ Button and Enter Key
const getPokemon = () => {
    let pokemonName = document.getElementById("pokemonName").value.toLowerCase().replace(/\s+/g, '')
    let urlPokemonName = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    fetch(urlPokemonName)
    .then((res) => res.json())
    .then((pokemon) => {
        console.log(pokemon);

        let pokemonResult = ''
        let [ img, id, name, order, weight, type ] = [
            pokemon.sprites.front_default,
            pokemon.id,
            pokemon.name,
            pokemon.order,
            pokemon.weight,
            pokemon.types[0].type.name
        ]
            
        pokemonResult += `
        <center>
            <ul class="pokemonList">
                <img class="pokemonItems" src="${img}" alt="pokemon">
                <li class="pokemonItems">ID: ${id}</li>
                <li class="pokemonItems">NAME: ${name}</li>
                <li class="pokemonItems">ORDER: ${order}</li>
                <li class="pokemonItems">WEIGHT: ${weight}</li>
                <li class="pokemonItems">TYPE: ${type}</li>
            </ul>
        </center>
        `

        document.querySelector(".pokemonDiv")
        .insertAdjacentHTML("afterbegin", pokemonResult)

        // BG Color based on type
        switch(type){
            case "???":
                document.querySelector(".pokemonList")
                .style.backgroundColor = "#68A090"
                break;
                
            case "normal":
                document.querySelector(".pokemonList")
                .style.backgroundColor = "#68A090"
                break;
                
            case "fire":
                document.querySelector(".pokemonList")
                .style.backgroundColor = "#F08030"
                break;
                
            case "fighting":
                document.querySelector(".pokemonList")
                .style.backgroundColor = "#C03028"
                break;
                
            case "water":
                document.querySelector(".pokemonList")
                .style.backgroundColor = "#6890F0"
                break;
                
            case "flying":
                document.querySelector(".pokemonList")
                .style.backgroundColor = "#A890F0"
                break;
                
            case "grass":
                document.querySelector(".pokemonList")
                .style.backgroundColor = "#78C850"
                break;
                
            case "poison":
                document.querySelector(".pokemonList")
                .style.backgroundColor = "#A040A0"
                break;
                
            case "electric":
                document.querySelector(".pokemonList")
                .style.backgroundColor = "#F8D030"
                break;
                
            case "ground":
                document.querySelector(".pokemonList")
                .style.backgroundColor = "#E0C068"
                break;
                
            case "psychic":
                document.querySelector(".pokemonList")
                .style.backgroundColor = "#F85888"
                break;
                
            case "rock":
                document.querySelector(".pokemonList")
                .style.backgroundColor = "#B8A038"
                break;
                
            case "ice":
                document.querySelector(".pokemonList")
                .style.backgroundColor = "#98D8D8"
                break;
                
            case "bug":
                document.querySelector(".pokemonList")
                .style.backgroundColor = "#A8B820"
                break;
                
            case "dragon":
                document.querySelector(".pokemonList")
                .style.backgroundColor = "#7038F8"
                break;
                
            case "ghost":
                document.querySelector(".pokemonList")
                .style.backgroundColor = "#705898"
                break;
                
            case "dark":
                document.querySelector(".pokemonList")
                .style.backgroundColor = "#705848"
                break;
                
            case "steel":
                document.querySelector(".pokemonList")
                .style.backgroundColor = "#B8B8D0"
                break;
                
            case "fairy":
                document.querySelector(".pokemonList")
                .style.backgroundColor = "#EE99AC"
                break;
                
            default:
                document.querySelector(".pokemonList").style.backgroundColor = "#000000"
        }

    })
}

let getPokemonBtn = document.querySelector(".getPokemonBtn")
.addEventListener('click', getPokemon)

document.querySelector("[name=pokemonName]").addEventListener("keyup", (e) => {
    if(e.key == "Enter"){
        console.log("Enter");
        getPokemon()
    }
})