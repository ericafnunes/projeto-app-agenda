import React, { createContext, useState, useEffect } from "react";

import api from "../api";
import history from "../history";

const Context = createContext();


function AuthProvider({ children }) {
    const [authenticated, setAuthenticated] = useState(false);


    useEffect(() => {
        const token = localStorage.getItem('token');
        // console.log(token);

        if (token) {
            api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`;
            // console.log(token);
            setAuthenticated(true);
        }

    }, [])

    async function handleLogin() {

        const body = {
            email: "daniel.lopes@cubos.academy",
            senha: "123456"
        }

        const response = await fetch('https://cubos-api-contacts.herokuapp.com/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });
        const data = await response.json();
        console.log(data.token);
        console.log(data);

        localStorage.setItem('token', JSON.stringify(data.token));
        api.defaults.headers.Authorization = `Bearer ${data.token}`;
        history.push('/contatos');
        setAuthenticated(true);
    }

    return (
        <Context.Provider value={{ authenticated, handleLogin }}>
            {children}
        </Context.Provider>
    );
}

export { Context, AuthProvider };



