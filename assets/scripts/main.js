import { pokeApi } from './poke-api.js'
import { convertPokemonToLi } from './functions/convertPokemonToLi.js'
import { loadMoreButton, pokemonList } from './dom.js'
import { loadPokemonItens, limit, offset } from './functions/loadPokemonItens.js'

const maxRecordes = 11

loadPokemonItens(offset, limit)

loadMoreButton.addEventListener('click', () => {
  let offsetApi = offset
  offsetApi += limit
  
  let qtdRecord = offsetApi + limit
  
  if(qtdRecord => maxRecordes) {
    const newLimit = maxRecordes - offset
    loadPokemonItens(offset, newLimit)
    loadMoreButton.parentElement.removeChild(loadMoreButton)
  }else{
    loadPokemonItens()
  }
  
  loadPokemonItens(offsetApi, limit)
})

pokeApi.getPokemons().then((pokemonOl = []) => {
  pokemonList.innerHTML += pokemonOl.map(convertPokemonToLi).join('')
})