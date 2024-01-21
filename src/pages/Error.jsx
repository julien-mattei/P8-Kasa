import { Link } from "react-router-dom"

function PageError () {
    return <div className="error">
        <h1 className="error-title">404</h1>
        <span className="error-text">Oups! La page que vous demandez n'existe pas.</span>
        <Link to="/home">Retourner sur la page d’accueil</Link>
    </div>
}

export default PageError