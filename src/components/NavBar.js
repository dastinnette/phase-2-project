import { NavLink } from 'react-router-dom';

function NavBar() {

    return(
        <div>
            <NavLink to={"/Gallery"}>Gallery</NavLink>
            <NavLink to={"/New"}>NewForm</NavLink>
        </div>
    );
}

export default NavBar;