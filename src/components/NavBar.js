import { NavLink } from 'react-router-dom'

function NavBar() {

    return (
        <div className="navbar">
            <NavLink to="/Home">
                <span>Home</span>
            </NavLink>
            <NavLink to="/RecentWork">
                <span>Recent Work</span>
            </NavLink>
            <NavLink to="/Contact">
                <span>Contact</span>
            </NavLink>
        </div>
    )
}

export default NavBar