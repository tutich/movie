import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from '../../firebase';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

function SignUp () {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    // const navigate = useNavigate()


    const handleSubmit = (e) => {
        e.preventDefault();
        // axios.post('http://localhost:3001/register', {name, email, password})
        // .then(result => {console.log(result)
        //     navigate('/login')
        // }).catch(err => console.log(err))
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log(userCredential);
        })
        .catch((error) => {
            console.log(error);
        })
    }



    return (
        <div className="container registration">
            <form >
                <div class="name">
                    <label>Name</label>
                    <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}/>
                
                </div>

                <div class="email">
                    <label>Email</label>
                    <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>

                <div class="pass">
                    <label>Password</label>
                    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>
            </form>
            <button type="submit" onClick={handleSubmit}>Sign up</button>

            <p>Already have an account?</p>
            
            <button>Login</button>

        </div>
    );
};

export default SignUp;