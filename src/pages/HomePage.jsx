import { useRef } from "react"
import { setTrainerG } from "../store/states/trainer.state"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import './styles/HomePage.css'
import pokedex from "./image/pokedex.png"

const HomePage = () => {

  const inputTrainer = useRef()

  const dispatch = useDispatch()

  const navigate = useNavigate()

  const handleSubmit = e => {
    e.preventDefault()
    dispatch(setTrainerG(inputTrainer.current.value.trim()))
    navigate('/pokedex')
  }

  return (
    <div className="HomePage">
      <figure className="HomePage__figure">
        <img className="HomePage__img" src={pokedex} alt="" />
      </figure>
      <div className="HomePage__container">
        <h2 className="HomePage__title">Hi trainer!</h2>
        <p className="HomePage__text">To see the pokemon's, type your name.</p>
        <form className="HomePage__form" onSubmit={handleSubmit}>
          <input className="HomePage__input" ref={inputTrainer} type="text" placeholder="Introduce your name" />
          <button className="HomePage__button">Start</button>
        </form>
      </div>
      <div className="HomePage__footer">
        <div className="HomePage__pokebola">
          <div className="HomePage__detail"></div>
        </div>
      </div>
    </div>
  )
}

export default HomePage