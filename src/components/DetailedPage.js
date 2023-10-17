import { useParams } from "react-router-dom";
import { useEffect,useState } from "react";

function DetailedPage(){
    const {id} = useParams()
    const [snapshot,setSnapshot] = useState(null)
    useEffect(()=>{fetch(`http://localhost:6001/snapshots/${id}`).then(r=>r.json()).then(setSnapshot)},[id])

    return(
        <div>
            <img 
            src={snapshot?.hdurl}
            alt={snapshot?.title}
        />
        <h1>{snapshot?.title}</h1>
        <p>{snapshot?.date}</p>
        <p>{snapshot?.explanation}</p>
    </div>
    )
}
export default DetailedPage;
