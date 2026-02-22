import { useState } from 'react';
import { useEffect } from 'react';
import { COCKTAILS } from '../shared/COCKTAILS';
import CocktailList from '../components/CocktailList';

const HomePage = () => {
  const [cocktails, setCocktails] = useState(COCKTAILS);

  useEffect(() => {
  fetchCocktail();
  }, []);

async function fetchCocktail() {
  try {
    let response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita');
    let data = await response.json();
    console.log(data);
    setCocktails(data.drinks);
    } catch (error) {
    console.error('There was an error', error)
  }
}

const deleteCocktail = (id) => {
  setCocktails(cocktails.filter((cocktail) => cocktail.idDrink !== id))
}


async function fetchRandomCocktail() {
  try {
    let response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php');
    let data = await response.json();
    console.log(data);
  setCocktails([data.drinks[0], ...cocktails].slice(0, 6))
    } catch (error) {
    console.error('There was an error', error)
  }
}


return (
  <> 
    <button className='surpriseButton' onClick={() => fetchRandomCocktail()}>Surprise Cocktail</button>
    <CocktailList cocktails={cocktails} deleteCocktail={deleteCocktail}/>
  </>
)
}

export default HomePage;