import { signInWithEmailAndPassword } from "firebase/auth";
import React from "react";
import { useState } from "react";
import {auth} from '../../firebase';


function SignIn () {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleClick = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) =>{
            console.log(userCredential)
        })
        .catch((error) => {
            console.log(error);
        })
    }

    return (
        <div className="container login">
            <form>
                {/* <label>Name</label>
                <input type="text" placeholder="Name"/> */}

                <div class="email">
                    <label className="">Email</label>
                    <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>

                <div class="pass">
                    <label>Password</label>
                    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value) }/>
                </div>
            </form>

            <button onClick={handleClick}>Login</button>

        </div>
    );
};

export default SignIn;