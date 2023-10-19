import { useNavigate } from "react-router-dom";

function FavoriteItem({ favorite }){
    const { id, hdurl} = favorite
    const navigate = useNavigate()
    function handlefavoriteClick(){
        navigate(`/Gallery/${id}`)
    } 
    return(
        <img className="image" src={hdurl} alt={id} draggable="false" onClick={handlefavoriteClick}/>  
    );
}

export default FavoriteItem;