import { createContext, useContext, useState } from "react";
import PropTypes from 'prop-types'

export const AuthContext = createContext({})

export function AuthProvider({ children }) {
    const [user, setUser] = useState(() => {
        const userStorage = localStorage.getItem('@labmoney:user')

        if(userStorage) {
            return JSON.parse(userStorage)
        }
        return null
    })
    
    async function signIn({ username, password }) {
        const response = await fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username,
                password,
            })
        })

        if(response.ok) {
            const data = await response.json()

            setUser(data)
            
            localStorage.setItem('@labmoney:user', JSON.stringify(data))

            return true;

        } else {
            return false;
        }
    }

    function signOut() {
        localStorage.removeItem('@labmoney:user')
        setUser(null)
    }

    return <AuthContext.Provider value={{ user, signIn, signOut }}>{children}</AuthContext.Provider>
}

AuthProvider.propTypes = { 
    children: PropTypes.node.isRequired,
}

export function useAuth() {
    const context = useContext(AuthContext)

    return context;
}