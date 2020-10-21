import React , {useState,useEffect} from 'react';

import Recipe from "./Recipe";

import './App.css';

const App = ()=>{

    const APP_ID ="edd7acdd";
    const APP_KEY = "bb0be3e50bb4676c60a8d412663fa859";
    

    const[recipes,setRecipes] = useState([]);

    const[search,setSearch] = useState("");

    const[query,setQuery] = useState("chicken")

     useEffect(()=>{
            getRecipes();
       },[query])

    const getRecipes = async() => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    
    setRecipes(data.hits);
    //console.log(data.hits)

} 
  const updateSearch =e=>{
    setSearch(e.target.value)
    console.log(search)
  }

  const getSearch =e=>{
    e.preventDefault();
    setQuery(search);
    setSearch("")
  }
  return (
    <div className="App">
      <form onSubmit ={getSearch} className ="search-form">
        <input className ="search-bar" type ="text" value ={search} onChange = {updateSearch}/>
        <button  className ="search-button" type ="submit">Search</button>
      </form>

      {recipes.map((recipe,index)=>(
        <Recipe
        key={index} 
        title = {recipe.recipe.label} 
        calories = {recipe.recipe.calories}
        image= {recipe.recipe.image}
        ingredients = {recipe.recipe.ingredients}
        />
      ))}
    </div>
  );
}

export default App;
