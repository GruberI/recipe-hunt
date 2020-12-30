import React, { Component } from 'react';
import Form from './components/Form'
import './App.css';

class App extends Component {
  state = {
    recipes: []
  }

  getRecipe = async (e) => {
    const recipeName = e.target.elements.recipeName.value
    e.preventDefault();
    const api_call = await fetch
    ("https://api.spoonacular.com/recipes/complexSearch?apiKey=ab544eff89824c03a4d6c6abd71a5242&query=pasta&number=10")
    
    const data = await api_call.json();
    this.setState({recipes: data.results})
    console.log(this.state.recipes)
  }

  render() {return (
      <div className="App">
        <header className="App-header">
         <h1 className="App-title">Recipe Hunt</h1>
        </header>

        <Form getRecipe={this.getRecipe}/>
        {this.state.recipes.map((recipe) => {
          return <p key={recipe.id}>{recipe.title}</p>
        })}
      </div>
    );
  }
}

export default App;
