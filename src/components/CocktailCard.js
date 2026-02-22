import { Link } from "react-router-dom";

const CocktailCard = ({ cocktail, deleteCocktail }) => {
  return (
    <div className="cocktail-card">
      <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
      <h3>{cocktail.strDrink}</h3>
      <p>{cocktail.strCategory}</p>

      <Link to={`/cocktail/${cocktail.idDrink}`}>
        <button>Details</button>
      </Link>
       <button className='deleteButton' onClick={() => deleteCocktail(cocktail.idDrink)}>Delete</button>
    </div>
  );
};

export default CocktailCard;