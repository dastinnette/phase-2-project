
function ItemCard({ snapshot }){
    const { id, copyright, date, explanation, hdurl, title } = snapshot
    
    return(
        <div>
            <img 
                src={hdurl}
                alt={title}
            />
            <h1>{title}</h1>
        </div>
    );
}

export default ItemCard;