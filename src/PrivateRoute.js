import { Navigate, Outlet } from "react-router-dom"

const PrivateRoute = ({turno, path}) => {
  return path === '/game' ? 
    !turno ? <Outlet /> : <Navigate to={path} /> 
    : 
    turno ? <Outlet />  : <Navigate to={path} />
}

export default PrivateRoute