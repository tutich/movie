import { useEffect, useState } from "react";
import { auth } from "../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Authentication () {
    
    const [userName, setUserName] = useState(null);
    const navigate = useNavigate();

    useEffect (() => {
        const listen = onAuthStateChanged(auth, (user) =>{
            if(user) {
                setUserName(user)
            }else {
                setUserName(null)
            }
        })
        return () => {
            listen();
        }
    }, [])

    const userSignOut = () => {
        signOut(auth).then(() => {
            console.log(`sign out succcessful`)
           navigate('/')
        })
        .catch((error) => {
            console.log(error)
        })
    }

    return (
        <>
        {userName ? <> <p></p> <button onClick={userSignOut}>Sign Out</button> </>: <p>Signed Out</p>}
        </>
    )
}

export default Authentication;