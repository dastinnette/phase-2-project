import {useOutletContext} from "react-router-dom";

function FavoriteItem({ favorite, draggable, onMouseDown, onMouseUp, onMouseMove, onTouchStart, onTouchEnd, onTouchMove }){
    const { setFavoritesBar } = useOutletContext();
    const { id, hdurl} = favorite
    function handleFavoriteClick(){
        const isConfirmed = window.confirm(`are you sure you want to remove this item from the list?`)
    if (isConfirmed) {
        //^ is boolean that is on homepage that renders then another boolean to show window with button to delete
        fetch(`http://localhost:6001/favorites/${id}`, {method: 'DELETE'})
        .then(r =>{
            if(r.ok)
            console.log(`removed`)
            setFavoritesBar((favoriteBar) => favoriteBar.filter((favorite) => favorite.id !==id))
            // -> bolean = state in homepage passed thru context = ^
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