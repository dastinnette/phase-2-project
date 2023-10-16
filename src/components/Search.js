
function Search({searchValue,setSearchValue}) {
    function handleSearch(e) {
        setSearchValue(e.target.value)
    }
    return(
        <div>
            <input type='text' placeholder="SearchItem" value={searchValue} onChange={handleSearch}/>
        </div>
    );
}

export default Search;