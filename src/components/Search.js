
function Search({searchValue,setSearchValue}) {
    function handleSearch(e) {
        setSearchValue(e.target.value)
    }
    return(
        <div>
            <input className="searchBar" type='text' placeholder="Search Starviews" value={searchValue} onChange={handleSearch}/>
        </div>
    );
}

export default Search;