import { Navigate } from "react-router-dom";

export const PrivateMediumRoute = ({ Component, redirectPath, isAuth}) => {
    console.log(isAuth)
    if (isAuth) {
        return <Component />
    }

    return <Navigate to={redirectPath} />
}

export const AdminMediumRoute = ({ Component, redirectPath, isAuth, setIsAuth  }) => {
    console.log(isAuth)
    if (!isAuth) {
        return <Component setIsAuth={setIsAuth}/>
    }

    return <Navigate to={redirectPath} />
}