// src/App.js
import { useState } from 'react';
import './App.css';
import AddFoodForm from './components/AddFoodForm';
import FoodBox from './components/FoodBox';
import Search from './components/Search';
import foods from './foods.json';

function App() {
  const [food, setFood] = useState(foods);
  const [filteredFoods, setFilteredFoods] = useState(foods);

  function handleAddNewFood(newFood) {
    setFood([newFood, ...food]);
  }

  function handleSearch(keyword) {
    const filteredFoods = food.filter((food) => {
      return food.name.toLowerCase().includes(keyword.toLowerCase());
    });

    setFilteredFoods(filteredFoods);
  }

  function handleDeleteFood(index) {
    const newFoods = [...filteredFoods];
    newFoods.splice(index, 1);

    setFilteredFoods(newFoods);
  }

  return (
    <div className="App">
      <div>
        <Search handleSearch={handleSearch} />
        <h1>Food List</h1>
        <AddFoodForm handleAddNewFood={handleAddNewFood} />
      </div>
      {food &&
        filteredFoods.map((f) => {
          return (
            <div>
              <FoodBox food={f} handleDeleteFood={handleDeleteFood} />
            </div>
          );
        })}
    </div>
  );
}
export default App;
