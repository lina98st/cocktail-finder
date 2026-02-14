const CocktailCard = ({ cocktail }) => {
  return (
    <div className="card">
      <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
      <h3>{cocktail.strDrink}</h3>
      <p>{cocktail.strCategory}</p>
    </div>
  )
}

export default CocktailCard;