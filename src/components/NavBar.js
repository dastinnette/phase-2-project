import Search from './Search';
import { NavLink } from 'react-router-dom';

function NavBar({ searchValue, setSearchValue}) {

    return(
        <div>
            <NavLink to={"/Gallery"}>Gallery</NavLink>
            <NavLink to={"/New"}>NewForm</NavLink>
            <Search searchValue={searchValue} setSearchValue={setSearchValue}/>
        </div>
    );
}

export default NavBar;