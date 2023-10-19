import { useNavigate } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

function ItemCard({ snapshot }){
    const { id, date, hdurl, title } = snapshot
    const navigate = useNavigate()
    function handleImageClick(){
        navigate(`/Gallery/${id}`)
    }
    return(
        <Col xs={6} md={3} className="cards">
            <Card style={{ width: '20rem',color:"#000000",boxShadow: '0 9px 10px rgba(0, 0, 0, 1.5)' }}>
                <Card.Img style={{ height: '18rem' }} variant="top" src={hdurl} alt={title} loading="lazy" onClick={handleImageClick} />  
                <Card.Title>{title}</Card.Title>
                <Card.Text>{date}</Card.Text>
            </Card>
        </Col>
    );
}

export default ItemCard;