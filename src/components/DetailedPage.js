import { useParams } from "react-router-dom";
import { useEffect,useState } from "react";

function DetailedPage(){
    const {id} = useParams()
    const [snapshot,setSnapshot] = useState(null)
    useEffect(()=>{fetch(`http://localhost:6001/snapshots/${id}`).then(r=>r.json()).then(setSnapshot)},[id])

    return(
        <div>
            <div>
                <img className="detail-image"
                src={snapshot?.hdurl}
                alt={snapshot?.title}
            />
                <h1 className="detail-title">{snapshot?.title}</h1>
                <p className="detail-date">{snapshot?.date}</p>
                <p className="detail-explanation">{snapshot?.explanation}</p>
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
