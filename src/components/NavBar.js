import NewForm from './NewForm';
import Search from './Search';

function NavBar({ searchValue, setSearchValue, onNewSnapshot }) {

    return(
        <div>
            <NewForm onNewSnapshot={onNewSnapshot}/>
            <Search searchValue={searchValue} setSearchValue={setSearchValue}/>
        </div>
    );
}

export default NavBar;