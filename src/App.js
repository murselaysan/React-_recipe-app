import React , {useState,useEffect} from 'react';

import Recipe from "./Recipe";

import './App.css';

const App = ()=>{

    const APP_ID ="edd7acdd";
    const APP_KEY = "bb0be3e50bb4676c60a8d412663fa859";
    

    const[recipes,setRecipes] = useState([])

     useEffect(()=>{
            getRecipes();
       },[])

    const getRecipes = async() => {
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    
    setRecipes(data.hits);
    //console.log(data.hits)

}
  return (
    <div className="App">
      <form className ="search-form">
        <input className ="search-bar" type ="text"/>
        <button  className ="search-button" type ="submit">Search</button>
      </form>

      {recipes.map((recipe,index)=>(
        <Recipe
        key={index} 
        title = {recipe.recipe.label} 
        calories = {recipe.recipe.calories}
        image= {recipe.recipe.image}
        />
      ))}
    </div>
  );
}

export default App;
