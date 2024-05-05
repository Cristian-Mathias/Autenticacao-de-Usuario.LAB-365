import { Link, useParams } from "react-router-dom";

export function User() {
    const { userId } = useParams()


    return (
        <div>
            <Link to={-1}> {"<-"} Voltar</Link>
            <h1>Visualizar usuário {userId}</h1>
        </div>
    )
} 