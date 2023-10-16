import NewForm from './NewForm';
import Search from './Search';

function NavBar({searchValue,setSearchValue}) {

    return(
        <div>
            <NewForm/>
            <Search searchValue={searchValue} setSearchValue={setSearchValue}/>
        </div>
    );
}

export default NavBar;