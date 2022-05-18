import { useEffect } from "react"
import { useSelector } from "react-redux"
import Edit from "./edit/Edit";
import styles from "./Admin.module.css"

const Admin = () => {
    const select = useSelector((state) => state.registrationReducer.data)
    return(
        <div className={styles.wrapper}>
            <h1>Hello</h1>
            <Edit />
        </div>
    )
} 

export default Admin