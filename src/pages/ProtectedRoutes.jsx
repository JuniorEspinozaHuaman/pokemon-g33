import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'
import imgpng from './image/pokeheader.png'


const ProtectedRoutes = () => {
   const trainer = useSelector(state => state.trainer)

   if (trainer.length >= 3) {
      return <div>
         <img src={imgpng} alt="" />
         <Outlet />
      </div>
   } else {
      return <Navigate to='/' />
   }
}

export default ProtectedRoutes