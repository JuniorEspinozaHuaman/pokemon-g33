import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'
import './styles/ProtectedRoutes.css'
import pokedex from './image/pokedex.png'

const ProtectedRoutes = () => {
   const trainer = useSelector(state => state.trainer)

   if (trainer.length >= 3) {
      return <div className='Protected'>
         <div className='Protected__contenedor'>
            <img className='Protected__header__img' src={pokedex} alt="" />
         </div>
         <div className='Protected__black'>
            <div className="Protected__pokebola">
               <div className="protected__detail"></div>
            </div>
         </div>
         <Outlet />
      </div>
   } else {
      return <Navigate to='/' />
   }
}

export default ProtectedRoutes