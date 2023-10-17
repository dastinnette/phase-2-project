import ItemCard from './ItemCard'
import { useOutletContext } from 'react-router-dom';
function ItemContainer() {

    const { searchValue,snapshots } = useOutletContext();

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
            {renderSnapShots}
        </ul>
    );
}

export default ItemContainer;