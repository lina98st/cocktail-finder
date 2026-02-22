import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CocktailDetailPage = () => {

 const [cocktail, setCocktail] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

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

const ingredients = [];
for (let i = 1; i <= 15; i++) {
  if (cocktail?.[`strIngredient${i}`]) {
    ingredients.push(cocktail[`strIngredient${i}`]);
  }
}


    return (
<>
<div className="detail-card">
  <div className="row">
    <div className="col-md-6">
    <img src={cocktail?.strDrinkThumb} alt={cocktail?.strDrink} />

    </div>
    <div className="col-md-6">
        <button className='back-button' onClick={() => navigate(-1)}>Back</button>
            <h2>{cocktail?.strDrink}</h2>

                <p>Ingredients</p>
  {ingredients.map((ingredient) => ( 
<p key={ingredient}>{ingredient}</p>
))}
  </div>
  <div className="col-md-6">
{cocktail?.strInstructions}
  </div>
</div>
  </div>
</>
    );
}

export default CocktailDetailPage;