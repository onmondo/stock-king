import React, { useState } from "react";
import "../../styles/login.scss";
import axios from "axios";
import { LoginCredentials } from "../../interfaces/users";
import { getWithExpiry, setWithExpiry } from "../../util/localstorage";

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const login = async (loginCredentials: LoginCredentials) => {
        const apiUrl = `${process.env.LOCAL_STOCK_KING_TRPC}/login`;
        try {
            const response = await axios.post(apiUrl, loginCredentials, {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                }
            });
            console.log(response);
            const accesstoken = response.data.result.data;
            setWithExpiry('accesstoken', accesstoken, 14400000)
            setMessage('Login successful!')
        } catch (error) {
            const errorDetails = error as Error;
            setMessage(`Login failed... [${errorDetails.message}]`)
        }

    }

    const handleUsernameChange = (event: any) => {
        event.preventDefault();
        setUsername(event.target.value);
    }

    const handlePasswordChange = (event: any) => {
        event.preventDefault();
        setPassword(event.target.value);
    }

    const handleLogin = (event: any) => {
        event.preventDefault();
        login({ username, password })
    }

    const retrievedAccessToken = getWithExpiry("accesstoken")

    return (
        <section id="login">
            <header>
                <h1>Login</h1>
                { (message) ? <p>{message}</p> : <></> }
            </header>
            {
                (retrievedAccessToken) 
                ?
                    <p>User login successfully</p>
                :
                    <form action="">
                        <p>
                            <label htmlFor="username">Email Add</label>
                            <input id="username" type="email" placeholder="admin@admin.com" onChange={handleUsernameChange}>
                            </input>
                        </p>
                        <p>
                            <label htmlFor="password">Password</label>
                            <input id="password" type="password" onChange={handlePasswordChange}></input>                    
                        </p>
                        <p>
                            <button onClick={handleLogin}>Login</button>
                        </p>
                    </form>
            }

        </section>
    )
}
