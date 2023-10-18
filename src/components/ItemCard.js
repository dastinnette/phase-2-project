import { useNavigate } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

function ItemCard({ snapshot }){
    const { id, copyright, date, explanation, hdurl, title } = snapshot
    const navigate = useNavigate()
    function handleImageClick(){
        navigate(`/Gallery/${id}`)
    }
    return(

                <Col xs={6} md={3} className="cards">
                    <Card style={{ width: '20rem' }}>
                        <Card.Img style={{ height: '18rem' }} variant="top" src={hdurl} alt={title} onClick={handleImageClick} />  
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>{date}</Card.Text>
                    </Card>
                </Col>
   
    );
}

export default ItemCard;