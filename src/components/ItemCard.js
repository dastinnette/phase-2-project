import { useNavigate } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

function ItemCard({ snapshot }){
    const { id, copyright, date, explanation, hdurl, title, url, media_type } = snapshot
    const navigate = useNavigate()
    function handleImageClick(){
        navigate(`/Gallery/${id}`)
    }
    let imgCheck;
    if (media_type === "video") {
        imgCheck = (<iframe style={{ height: '18rem' }} variant="top" src={url} alt={title}  />)
    } else if (media_type === "image"){
        imgCheck = (<Card.Img style={{ height: '18rem' }} variant="top" src={hdurl} alt={title} onClick={handleImageClick} />)
    } else {
        imgCheck = (<><div>Sorry! cannot load :</div><div>media_type:{media_type}<img src={""}/></div></>)
    }
    return(
        <Col xs={6} md={3} className="cards">
            <Card style={{ width: '20rem',color:"#000000",boxShadow: '0 9px 10px rgba(0, 0, 0, 1.5)' }}>
                {imgCheck}
                <Card.Title onClick={handleImageClick}>{title}</Card.Title>
                <Card.Text>{date}</Card.Text>
            </Card>
        </Col>
    );
}

export default ItemCard;