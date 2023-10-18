import ItemCard from './ItemCard'
import { useOutletContext } from 'react-router-dom';
import Search from './Search';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function ItemContainer() {

    const { searchValue,snapshots,setSearchValue } = useOutletContext();

    const foundSnapShots = snapshots.filter((snapshot)=> 
        snapshot.explanation.toLowerCase().includes(searchValue.toLowerCase()) || 
        snapshot.title.toLowerCase().includes(searchValue.toLowerCase()) || 
        snapshot.date.toLowerCase().includes(searchValue.toLowerCase()))

    const renderSnapShots = foundSnapShots.map((snapshot) => (
            <ItemCard
                key={snapshot.id}
                snapshot={snapshot}
            />
    ))

    return(
        <ul>
            <Search searchValue={searchValue} setSearchValue={setSearchValue}/>
            <Container>
                <Row>
                    {renderSnapShots}
                </Row>
            </Container>
        </ul>
    );
}

export default ItemContainer;