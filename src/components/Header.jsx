import { Link, NavLink } from "react-router-dom"
import logo from "../assets/LOGO.png"



function Header () {
    return <div className="header">
            <img alt="logo-kasa" src={logo} className="logo"></img>
            <nav>
                <NavLink to="/home" className={({isActive}) => isActive ? "active" : ""}>Home</NavLink>
                <NavLink to="/about" className={({isActive}) => isActive ? "active" : ""}>A Propos</NavLink>
            </nav>
    </div>
}

export default Header
