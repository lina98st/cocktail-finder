const CocktailCard = ({ cocktail }) => {
  return (
    <div className="cocktail-card">
      <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
      <h3>{cocktail.strDrink}</h3>
      <p>{cocktail.strCategory}</p>
    </div>
  )
}

export default CocktailCard;