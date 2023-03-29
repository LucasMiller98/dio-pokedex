import { Pokemon } from '../pokemon-model.js'

function convertPokeApiDetailToPokemon(pokeDetail) {
  const pokemon = new Pokemon()
  pokemon.number = pokeDetail.order
  pokemon.name = pokeDetail.name

  const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name)
  const [ type ] = types
  
  pokemon.types = types
  pokemon.type = type

  pokemon.photo = pokeDetail.sprites.other.dream_world.front_default

  return pokemon
}

function convertPokemonToLi(pokemon) {
  return `
    <li class="pokemon ${pokemon.type}">
      <span class="number">#00${pokemon.id}</span>
      <span class="name">${pokemon.name}</span>

      <div class="detail">
        <ol class="types">
          ${pokemon.types.map(type => `<li class="type ${type}">${type}</li>`).join('')}
        </ol>
        <img 
          src=${pokemon.photo}
          alt=${pokemon.name}
        >
      </div>
    </li>
  `
}

export {
  convertPokemonToLi,
  convertPokeApiDetailToPokemon
}