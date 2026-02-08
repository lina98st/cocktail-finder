//import logo from './logo.svg';
//import './App.css';
import GameCard from './components/GameCard.js';


const gameList = [
  {
    id: 0,
    name: "Hogwarts Legacy",
    rating: null,
    category: "fun"
  },
    {
    id: 0,
    name: "Lord of the Rings",
    rating: null,
    category: "fun"
    },
      {
    id: 0,
    name: "GTA 4",
    rating: null,
    category: "fun"
  }
]



function App() {
  return (
<div>
  <h1>My Board Game</h1>
{gameList.map( g => <GameCard game={g}/> ) }
</div>
  );
}

export default App;
