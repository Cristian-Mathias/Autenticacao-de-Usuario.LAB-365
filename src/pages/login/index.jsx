import { useState } from 'react'
import { Button, TextField } from '@mui/material'
import { useNavigate } from 'react-router-dom'

import styles from './style.module.css'
import { useAuth } from '../../contexts/auth-context'

export function Login() {
    const navigate = useNavigate()
    const { signIn } = useAuth()

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    async function onSubmit() {
        const data = {
            username,
            password,
        }
        const ok = await signIn(data)

        if (ok) {
            navigate('/home')
        } else {
            alert("Email/Senha inválida")
        }
    }

    return (
        <div className={styles.container}>
            
            <form className={styles.form} autoComplete='off'>
                <h1>Efetuar login</h1>
                <TextField
                    value={username}
                    onChange={event => setUsername(event.target.value)}
                    id="outline-basic"
                    label="Nome"
                    type="email"
                    variant="outlined"
                />
                <TextField
                    value={password}
                    onChange={event => setPassword(event.target.value)}
                    id="outline-basic"
                    label="Senha"
                    type='password'
                    variant="outlined"
                />
                <Button
                    variant="contained"
                    size="large"
                    style={{ backgroundColor: '#ec5990' }}
                    onClick={onSubmit}>Entrar</Button>

            </form>
        </div>
    )
}