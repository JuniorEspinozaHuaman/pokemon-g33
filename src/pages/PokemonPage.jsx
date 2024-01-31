import { useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch"
import { useEffect } from "react"
import './styles/PokemonPage.css'
import { useNavigate } from "react-router-dom/dist"
import { faCircleArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PokemonPage = () => {

  const { id } = useParams()

  const url = `https://pokeapi.co/api/v2/pokemon/${id}`

  const [pokemon, getPokemon] = useFetch(url)
  useEffect(() => {
    getPokemon()
  }, [])

  const navigate =useNavigate()
    const navigatePokedex = () => {
        navigate('/pokedex')
    }


  return (
    <section className="PokemonPage">
      <a className="pokemonPage__back" onClick={navigatePokedex}>
        <span className="pokemonPage__back__icon"><FontAwesomeIcon icon={faCircleArrowLeft} /></span>
      </a>
      <article className="PokemonPage__container__pokeInfo">
        <div className={`pokemonPage__header ${pokemon?.types[0].type.name}`}>
          <img className="PokemonPage__img" src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
        </div>
        <span className={`PokemonPage__id ${pokemon?.types[0].type.name}`} >#{pokemon?.id} </span>
        <div className="pokemonPage__name__container">
          <hr className="pokemonPage__hr" />
          <h2 className={`PokemonPage__name ${pokemon?.types[0].type.name}`}>{pokemon?.name}</h2>
          <hr className="pokemonPage__hr" />
        </div>
        
        <ul className="PokemonPage__list__IMC">
          <li className="PokemonPage__IMC__item">
            <span className="PokemonPage__IMC__name">Weight</span>
            <span className="PokemonPage__IMC__value">{pokemon?.weight}</span>
          </li>

          <li className="PokemonPage__IMC__item">
            <span className="PokemonPage__IMC__name">Height</span>
            <span className="PokemonPage__IMC__value">{pokemon?.height}</span>
          </li>
        </ul>

        <div className="pokemonPage__container__typeAbilities">
          <div className="pokemonPage__container__list">
            <h3 className="PokemonPage__title__list ">Type</h3>
            <ul className="PokemonPage__list">
              {
                pokemon?.types.map(typeInfo => (
                  <li className={`PokemonPage__item PokemonPage__item--type ${typeInfo.type.name}`} key={typeInfo.type.url}>{typeInfo.type.name}
                    <span></span>
                  </li>
                ))
              }
            </ul>
          </div>
          <div className="pokemonPage__container__list">
            <h3 className="PokemonPage__title__list">Abilities</h3>
            <ul className="PokemonPage__list">
              {
                pokemon?.abilities.map(abilityInfo => (
                  <li className="PokemonPage__item " key={abilityInfo.ability.url}>{abilityInfo.ability.name}</li>
                ))
              }
            </ul>
          </div>
        </div>


        <div className="pokemonPage__title__container">
          <h3 className="PokemonPage__title__stats">Stats</h3>
          <hr className="pokemonPage__hr__stats" />
        </div>
        <ul className="PokemonPage__list__stats">
          {
            pokemon?.stats.map(statInfo => (
              <li className="PokemonPage__item__stats" key={statInfo.stat.url}>
                <div className="pokemonPage__items_container">
                  <span className="PokemonPage__item__name">{statInfo.stat.name}</span>
                  <span className="PokemonPage__item__value">{statInfo.base_stat} / 250</span>
                </div>
                <div className={`pokemonPage__progressBar ${statInfo.stat.name}`} style={{ '--wdt': `${(statInfo.base_stat / 250) * 100}%` }}></div>
              </li>
            ))
          }
        </ul>
      </article>

      <article className="PokemonPage__container__pokeInfo">
        <div className="pokemonPage__container__title">
          <h3 className="PokemonPage__movements__title">Movements</h3>
          <hr className="pokemonPage__movements__hr" />
        </div>
        <ul className="PokemonPage__movements__list">
          {
            pokemon?.moves.map(moveInfo => (
              <li className="PokemonPage__movements__item" key={moveInfo.move.url}>
                <span className="PokemonPage__movements__name">{moveInfo.move.name}</span>
              </li>
            ))
          }
        </ul>
      </article>
    </section>
  )
}

export default PokemonPage