import { useState } from 'react';
import { useEffect } from 'react';
import { COCKTAILS } from './shared/COCKTAILS';
import './App.css';


function App() {
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


  return (
    <div className="App">
      <h1>CocktailFinder</h1>
    </div>
  );
}

export default App;