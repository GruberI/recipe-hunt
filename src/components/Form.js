import React from 'react';

const Form = (props) => {

    

    return (
        <div>
            <form onSubmit={props.getRecipe}>
                <input type="text" name="recipeName"></input>
                <button>Search</button>
            </form>
        </div> 
    );
}

export default Form;