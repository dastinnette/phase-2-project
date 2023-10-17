import { useParams } from "react-router-dom";
import { useEffect,useState } from "react";
import ItemCard from "./ItemCard";
function DetailedPage(){
    const {id} = useParams()
    const [snapshot,setSnapshot] = useState(null)
    useEffect(()=>{fetch(`http://localhost:6001/snapshots/${id}`).then(r=>r.json()).then(setSnapshot)},[id])
    
    return(
        <div>
            <ItemCard
            key={snapshot.id}
            snapshot={snapshot}/>
        </div>
    )
}
export default DetailedPage;
