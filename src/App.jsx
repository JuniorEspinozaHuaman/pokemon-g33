import './App.css'
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PokedexPage from './pages/PokedexPage';
import PokemonPage from './pages/PokemonPage';
import ProtectedRoutes from './pages/ProtectedRoutes';
import { useState } from 'react';


function App() {

  const [darkm, setdarkm] = useState(false)

  const darkMode = () => {
      if(darkm === false){
          setdarkm(true)
      } else {
          setdarkm(false)
      }
  }

  return (
    <div className={darkm === true ? 'darkm' : 'lightm'}>
      
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route element={<ProtectedRoutes/>}>
            <Route path='/pokedex' element={<PokedexPage darkMode={darkMode} darkm={darkm} />} />
            <Route path='/pokedex/:id' element={<PokemonPage />} />       
          </Route>
        </Routes >
      
    </div>
  )
}

export default App
