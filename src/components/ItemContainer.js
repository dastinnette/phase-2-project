import ItemCard from './ItemCard'

function ItemContainer({ snapshots }) {

    const renderSnapShots = snapshots.map((snapshot) => {
        return (
            <ItemCard
                key={snapshot.id}
                snapshot={snapshot}
            />
        )
    })

    return(
        <ul>
            {renderSnapShots}
        </ul>
    );
}

export default ItemContainer;