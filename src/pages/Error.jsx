import { Link } from "react-router-dom"
import "../styles/error.scss"

function PageError () {
    return <div className="error">
        <h1 className="error-title">404</h1>
        <span className="error-text">Oups! La page que vous demandez n'existe pas.</span>
        <Link to="/home" className="error-redirect">Retourner sur la page d’accueil</Link>
    </div>
}

export default PageError