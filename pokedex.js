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
        if(type == "???"){
            document.querySelector(".pokemonList").style.backgroundColor = "#68A090"
        }
        else if (type == "normal"){
            document.querySelector(".pokemonList").style.backgroundColor = "#68A090"
        }

        else if (type == "fire"){
            document.querySelector(".pokemonList").style.backgroundColor = "#F08030"
        }

        else if (type == "fighting"){
            document.querySelector(".pokemonList").style.backgroundColor = "#C03028"
        }

        else if (type == "water"){
            document.querySelector(".pokemonList").style.backgroundColor = "#6890F0"
        }

        else if (type == "flying"){
            document.querySelector(".pokemonList").style.backgroundColor = "#A890F0"
        }

        else if (type == "grass"){
            document.querySelector(".pokemonList").style.backgroundColor = "#78C850"
        }
        
        else if (type == "poison"){
            document.querySelector(".pokemonList").style.backgroundColor = "#A040A0"
        }

        else if (type == "electric"){
            document.querySelector(".pokemonList").style.backgroundColor = "#F8D030"
        }

        else if (type == "ground"){
            document.querySelector(".pokemonList").style.backgroundColor = "#E0C068"
        }

        else if (type == "psychic"){
            document.querySelector(".pokemonList").style.backgroundColor = "#F85888"
        }

        else if (type == "rock"){
            document.querySelector(".pokemonList").style.backgroundColor = "#B8A038"
        }

        else if (type == "ice"){
            document.querySelector(".pokemonList").style.backgroundColor = "#98D8D8"
        }

        else if (type == "bug"){
            document.querySelector(".pokemonList").style.backgroundColor = "#A8B820"
        }

        else if (type == "dragon"){
            document.querySelector(".pokemonList").style.backgroundColor = "#7038F8"
        }

        else if (type == "ghost"){
            document.querySelector(".pokemonList").style.backgroundColor = "#705898"
        }

        else if (type == "dark"){
            document.querySelector(".pokemonList").style.backgroundColor = "#705848"
        }

        else if (type == "steel"){
            document.querySelector(".pokemonList").style.backgroundColor = "#B8B8D0"
        }
        else if (type == "fairy"){
            document.querySelector(".pokemonList").style.backgroundColor = "#EE99AC"
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

