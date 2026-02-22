import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const CocktailDetailPage = () => {

 const [cocktail, setCocktail] = useState(null);
  const { id } = useParams();

  useEffect(() => {
  fetchDetailOfCocktail();
  }, [id]);

async function fetchDetailOfCocktail() {
  try {
    let response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
    let data = await response.json();
    console.log(data);
   setCocktail(data.drinks[0]);
    } catch (error) {
    console.error('There was an error', error)
  }
}






    return (
<>
<div className="row">
    <h2>{cocktail?.strDrink}</h2>
  <div className="col-md-6">
    {/* Zutaten hier */}
    
  </div>
  <div className="col-md-6">
    {/* Anleitung hier */}
  </div>
</div>
</>
    );
}

export default CocktailDetailPage;