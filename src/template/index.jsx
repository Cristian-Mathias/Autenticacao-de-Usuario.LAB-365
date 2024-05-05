import { Button } from '@mui/material'
import { Navigate, Outlet } from 'react-router-dom'

import styles from './style.module.css'
import { useAuth } from '../contexts/auth-context';
import { LogOut } from 'lucide-react';

export function Template() {

    const { user, signOut } = useAuth()

    const isUserLogged = !!user; /// user === null ? false : true

    return isUserLogged ? (
        <>
            <header className={styles.header}>
                <div className={styles.headerContent}>
                    <h2>Futuro Dev Tubarão </h2>
                    <div className={styles.containerAvatar}>
                        <span>SAIR</span>
                        <Button onClick={signOut}><LogOut size={16} /></Button>
                    </div>
                </div>
            </header>
            <main>
                <Outlet />
            </main>
        </>
    ) : <Navigate to="/" />
}


