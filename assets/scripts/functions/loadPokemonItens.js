import { pokemonList } from '../dom.js'
import { pokeApi } from '../poke-api.js'
import { convertPokemonToLi } from './convertPokemonToLi.js'

export let limit = 5 
export let offset = 0

export function loadPokemonItens(offset, limit) {
  pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
    pokemonList.innerHTML += pokemons.map(convertPokemonToLi).join('')
  })
}