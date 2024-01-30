import { useSelector } from "react-redux"
import useFetch from "../hooks/useFetch"
import { useEffect, useRef, useState } from "react"
import PokeCard from "../components/PokedexPage/PokeCard"
import SelectType from "../components/PokedexPage/SelectType"
import './styles/PokedexPage.css'
import PokedexPagination from "../components/PokedexPage/PokedexPagination"

const PokedexPage = () => {

    const [inputValue, setInputValue] = useState('')
    const [typeSelected, setTypeSelected] = useState('allPokemons')
    const trainerName = useSelector(state => state.trainer)

    const url = 'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0'
    const [pokemons, getPokemons, getTypePokemon] = useFetch(url)
    // page
    const totalPokemons = pokemons?.results.length

    const [productsPerPage, setProductsPerPage] = useState(3)
    const [currentPage, setCurrentPage] = useState(1)

    const lastIndex = currentPage * productsPerPage
    const firstIndex = lastIndex - productsPerPage
// console.log(pokemons);
    // console.log(totalPokemons);
    
   


    useEffect(() => {
        if (typeSelected === 'allPokemons') {
            getPokemons()
        } else {
            getTypePokemon(typeSelected)
            setCurrentPage(1)
        }
    }, [typeSelected])

    const inputName = useRef()

    const handleSearch = e => {
        e.preventDefault()
        setInputValue(inputName.current.value.trim().toLowerCase())
    }

    const cbFilter = (pokeInfo) => pokeInfo.name.toLowerCase().includes(inputValue)

    return (
        <div className="PokedexPage">
            <div className="pokedexPage__header__container">
                <h2 className="PokedexPage__title">
                    <span className="pokedexPage__Name">Welcome "{trainerName}", </span>
                    here you can find your favorite pokemon
                </h2>
                <div className="pokedexPage__form__container">
                    <form className="PokedexPage__form" onSubmit={handleSearch}>
                        <input className="PokedexPage__input" ref={inputName} type="text" placeholder="Search pokemon by name"/>
                        <button className="PokedexPage__button">Search</button>
                    </form>
                    <SelectType
                        setTypeSelected={setTypeSelected}
                    />
                </div>
            </div>

            <PokedexPagination 
            productsPerPage={productsPerPage}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            totalPokemons={totalPokemons}
            />
            <div className="container__pokecard">
                { 
                    pokemons?.results.filter(cbFilter).map(pokeInfo => (
                        <PokeCard
                            key={pokeInfo.url}
                            url={pokeInfo.url}
                        />
                    ))
                    .slice(firstIndex, lastIndex)
                }
                
            </div>
            <PokedexPagination 
            productsPerPage={productsPerPage}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            totalPokemons={totalPokemons}
            />
        </div>
    )
}

export default PokedexPage