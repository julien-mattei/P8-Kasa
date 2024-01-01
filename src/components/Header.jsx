import { Link } from "react-router-dom"
import logo from "../assets/LOGO.png"

function Header () {
    return <div className="header">
            <img alt="logo-kasa" src={logo}></img>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">A propos</Link>
            </nav>
    </div>
    
}

export default Header
