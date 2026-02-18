import CocktailCard from "./CocktailCard";

const CocktailList = ({ cocktails }) => {
  
  return (
    <div className='cocktail-list'>
{cocktails.map((cocktail) => 
<CocktailCard cocktail={cocktail} key={cocktail.idDrink} />
)}

    </div>
  );
}

export default CocktailList;