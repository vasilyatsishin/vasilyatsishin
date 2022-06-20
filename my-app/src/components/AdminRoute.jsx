import { Navigate } from "react-router-dom";

export const PrivateMediumRoute = ({ Component, redirectPath, isAuth, setIsAuth}) => {
    if (isAuth) {
        return <Component />
    }
    return <Navigate to={redirectPath} />
}

export const AdminMediumRoute = ({ Component, redirectPath, isAuth, setIsAuth  }) => {
    if (!isAuth) {
        return <Component setIsAuth={setIsAuth}/>
    }
    setIsAuth(!isAuth)
    return <Navigate to={redirectPath} />
}