import {useOutletContext} from "react-router-dom";

function FavoriteItem({ favorite, draggable, onMouseDown, onMouseUp, onMouseMove, onTouchStart, onTouchEnd, onTouchMove }){
    const { setFavoritesBar } = useOutletContext();
    const { id, hdurl} = favorite
    function handleFavoriteClick(){
        const isConfirmed = window.confirm(`are you sure you want to remove this item from the list?`)
    if (isConfirmed) {
        fetch(`http://localhost:6001/favorites/${id}`, {method: 'DELETE'})
        .then(r =>{
            if(r.ok)
            console.log(`removed`)
            setFavoritesBar((favoriteBar) => favoriteBar.filter((favorite) => favorite.id !==id))
        } 
        )
    }
    } 
    return(
        <img
            className="image"
            src={hdurl}
            alt={id}
            draggable={draggable}
            onMouseDown={onMouseDown}
            onMouseUp={onMouseUp}
            onMouseMove={onMouseMove}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
            onTouchMove={onTouchMove}
            onClick={handleFavoriteClick}/>  
    );
}

export default FavoriteItem;