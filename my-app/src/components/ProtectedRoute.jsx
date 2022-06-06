import { useState } from "react"
import { Navigate, Outlet } from "react-router-dom"

const ProtectedRoute = ({isAuth, children}) => {
    console.log(isAuth)
    return(
        <>
            { !isAuth
                ? <Navigate to="/login" />
                : children}
        </>
    )
}

export default ProtectedRoute