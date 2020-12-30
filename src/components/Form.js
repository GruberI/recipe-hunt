import React from 'react';

const Form = (props) => {



    return (
        <div>
            <form onSubmit={props.getRecipe} style={{ marginBottom:"2rem"}}>
                <input type="text" name="recipeName" className="form__input"></input>
                <button className="form__button">Search</button>
            </form>
        </div> 
    );
}

export default Form;