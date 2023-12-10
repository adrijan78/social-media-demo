import React from 'react'
import { useUsersStore } from '../store/usersStore'
import { Navigate, Outlet } from 'react-router-dom'





const PrivateRoute = ({component}:any) => {
    const currentUser = useUsersStore(state=>state.currentUser)
    debugger
    const isAuth = currentUser !== null &&  Object.getOwnPropertyNames(currentUser).length > 0;
  return (
    <>
        {isAuth?<Outlet/>:<Navigate to="/login"/>}
    </>
  )
}

export default PrivateRoute