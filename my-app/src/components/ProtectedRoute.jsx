import { useState } from "react"
import { Navigate } from "react-router-dom"

const ProtectedRoute = () => {
    const [isAuth, setIsAuth] = useState(false)
    return(
        <>
            {isAuth === false ? <Navigate to="/login" /> : console.log("auth")}
        </>
    )
}

export default ProtectedRoute