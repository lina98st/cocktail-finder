function GameCard(props) {
    return (
<>
<div className="bg-light border p-4 m-2">
        <h4>{props.game.name}</h4> 
        <p>{props.game.rating}</p>
        <p>{props.game.category}</p>
            </div>
</>
    )
}


export default GameCard