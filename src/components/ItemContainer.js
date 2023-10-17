import ItemCard from './ItemCard'

function ItemContainer({ searchValue,snapshots }) {

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