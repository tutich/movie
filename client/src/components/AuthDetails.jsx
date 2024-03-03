import { useEffect, useState } from "react";
import { auth } from "../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

function Authentication () {
    
    const [userName, setUserName] = useState(null);

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
        })
        .catch((error) => {
            console.log(error)
        })
    }

    return (
        <>
        {userName ? <> <p>Signed In</p> <button onClick={userSignOut}>Sign Out</button> </>: <p>Signed Out</p>}
        </>
    )
}

export default Authentication;