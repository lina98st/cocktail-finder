import { useState } from 'react';
import { useEffect } from 'react';
import { COCKTAILS } from '../shared/COCKTAILS';
import CocktailList from '../components/CocktailList';
import FilterOptions from '../components/FilterOptions';

const HomePage = () => {
  const [cocktails, setCocktails] = useState(COCKTAILS);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  useEffect(() => {
  fetchCocktail();
  }, []);

async function fetchCocktail() {
  if (!searchTerm) return;
  try {
let response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`);
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

const filteredCocktails = activeCategory === 'All' 
    ? cocktails 
    : cocktails.filter((cocktail) => cocktail.strCategory === activeCategory);


return (
  <> 
      <input 
      className="searchInput"
      type="text" 
      placeholder="Search cocktails..." 
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      />
          <button className='searchButton' onClick={() => fetchCocktail()}>Search</button>
    <button className='surpriseButton' onClick={() => fetchRandomCocktail()}>Surprise Cocktail</button>
    <FilterOptions onFilterChange={(category) => setActiveCategory(category)} />
    <CocktailList cocktails={filteredCocktails} deleteCocktail={deleteCocktail}/>
  </>
)
}

export default HomePage;