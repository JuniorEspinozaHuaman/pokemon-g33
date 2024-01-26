import { useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch"
import { useEffect } from "react"

const PokemonPage = () => {

  const { id } = useParams()

  const url = `https://pokeapi.co/api/v2/pokemon/${id}`

  const [pokemon, getPokemon] = useFetch(url)
  useEffect(() => {
    getPokemon()
  }, [])

  // console.log(pokemon);

  return (
    <section>
      <article>
        <img src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
        <span>#{pokemon?.id} </span>
        <h2> {pokemon?.name}</h2>
        <ul>
          <li>
            <span>Weight</span>
            <span>{pokemon?.weight}</span>
          </li>
          <li>
            <span>Height</span>
            <span>{pokemon?.height}</span>
          </li>
        </ul>
        <h3>Type</h3>
        <ul>
          {
            pokemon?.types.map(typeInfo => (
              <li key={typeInfo.type.url}>{typeInfo.type.name}</li>
            ))
          }
        </ul>
        <h3>Abilities</h3>
        <ul>
          {
            pokemon?.abilities.map(abilityInfo => (
              <li key={abilityInfo.ability.url}>{abilityInfo.ability.name}</li>
            ))
          }
        </ul>
        <h3>Stats</h3>
        <ul>
          {
            pokemon?.stats.map(stat => (
              <li key={stat.stat.url}>
                <span>{stat.stat.name}</span>
                <span>{stat.base_stat}/250</span>
              </li>
            ))
          }
        </ul>
      </article>
      <article>
        <h3>Movements</h3>
        <ul>
          {
            pokemon?.moves.map(moveInfo => (
              <li key={moveInfo.move.url}>
                <span>{moveInfo.move.name}</span>
              </li>
            ))
          }
        </ul>
      </article>
    </section>
  )
}

export default PokemonPage