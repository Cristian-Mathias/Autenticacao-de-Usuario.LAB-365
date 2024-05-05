import { createBrowserRouter } from 'react-router-dom'
import { Login } from '../pages/login'
import { Home } from '../pages/home'
import { User } from '../pages/user'

import { Template } from '../template'
import { Responsividade } from '../pages/responsividade'

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Login />
    },
    {
        path: '/home',
        element: <Template />,
        children: [
            {
                path: '/home',
                element: <Home />,
            },
            
        ]
    },
    {
        path: '/usuarios/:userId',
        element: <User />
    },
    {
        path: '/responsividade',
        element: <Responsividade />
    },
    {
        path: "*",
        element: <div><h1>Não encontrado! :(</h1></div>
    }
])

// export const routesNested = createBrowserRouter(
//     createRoutesFromElements(
//         <>
//             <Route path='/' element={Login} />
//             <Route path='/' element={Login}/>
//             <Route path='/' element={Login}/>
//         </>
//     )
// )