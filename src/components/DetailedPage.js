import { useParams,useOutletContext,useNavigate } from "react-router-dom";
import { useEffect,useState } from "react";

function DetailedPage(){
    const navigate = useNavigate()
    const { favoritesBar,setFavoritesBar } = useOutletContext();
    const {id} = useParams()
    const [snapshot,setSnapshot] = useState(null)
    useEffect(()=>{fetch(`http://localhost:6001/snapshots/${id}`).then(r=>r.json()).then(setSnapshot)},[id])
    function handlefavorite() {
        fetch("http://localhost:6001/favorites", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(snapshot),
        })
        .then((resp) => resp.json())
        .then((newFavorite) => {
            setFavoritesBar([newFavorite,...favoritesBar])
            navigate("/")
        })
    }
    let imgCheck;
    if (snapshot?.media_type === "video") {
        imgCheck = (<iframe className="detail-image" src={snapshot?.url} alt={snapshot?.title}  />)
    } else {imgCheck = (<img className="detail-image" src={snapshot?.hdurl} alt={snapshot?.title}/>)
    } 
    return(
        <div>
            <div>
                {imgCheck}
                <h1 className="detail-title">{snapshot?.title}</h1>
                <p className="detail-date">{snapshot?.date}</p>
                <p className="detail-explanation">{snapshot?.explanation}</p>
                <button onClick={handlefavorite}>Favorite Me!</button>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
    </div>
    )
}
export default DetailedPage;
