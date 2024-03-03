import React, { useState } from "react";
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

function SignUp () {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    // const navigate = useNavigate()


    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/register', {name, email, password})
        .then(result => {console.log(result)
            // navigate('/login')
        }).catch(err => console.log(err))
    }



    return (
        <div className="container registration">
            <form>
                <div class="name">
                    <label>Name</label>
                    <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)}/>
                
                </div>

                <div class="email">
                    <label>Email</label>
                    <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
                </div>

                <div class="pass">
                    <label>Password</label>
                    <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
                </div>
            </form>
            <button type="submit" onSubmit={handleSubmit}>Sign up</button>

            <p>Already have an account?</p>
            
            <button>Login</button>

        </div>
    );
};

export default SignUp;