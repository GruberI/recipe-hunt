import React from 'react';
import { Link } from 'react-router-dom';

class Recipe extends React.Component {
    state = {
        activeRecipe: []
    }

    componentDidMount = async () => {
        const title = this.props.location.state.recipe;
        const req = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=ab544eff89824c03a4d6c6abd71a5242&query=${title}&addRecipeInformation=true`)
        
        const res = await req.json();
        this.setState({ activeRecipe: res.results[0] })
        console.log(this.state.activeRecipe)
    }

    render(){

        const recipe = this.state.activeRecipe
        return(
            <div className="container">
                {
                    this.state.activeRecipe.length !== 0 && 
                        <div className="active-recipe">
                            <img className="active-recipe__img" src={recipe.image} alt={recipe.title}/>
                            <h3 className="active-recipe__title">{recipe.title}</h3>
                            <h4 className="active-recipe__publisher">Publisher: <span>{recipe.sourceName}</span></h4>
                            <p className="active-recipe__website">Website: <span><a href={recipe.spoonacularSourceUrl}>{recipe.spoonacularSourceUrl}</a></span></p>
                            <button className="active-recipe__button">
                                <Link to="/">Go Home</Link>
                            </button>
                        </div>
                }
            </div>
        )
    }
}

export default Recipe;