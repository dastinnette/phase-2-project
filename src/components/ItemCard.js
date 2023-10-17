import { useNavigate } from "react-router-dom";

function ItemCard({ snapshot }){
    const { id, copyright, date, explanation, hdurl, title } = snapshot
    const navigate = useNavigate()
    function handleImageClick(){
        navigate(`/Gallery/${id}`)
    }
    return(
        <div>
            <img 
                src={hdurl}
                alt={title}
                onClick={handleImageClick}
            />
            <h1>{title}</h1>
            <p>{date}</p>
            <p>{explanation}</p>
        </div>
    );
}

export default ItemCard;