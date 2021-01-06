import React, { useState } from 'react';
import PropTypes from 'prop-types'

export const AddCategory = ({setCategories}) => {
    const [inputValue, setInputValue] = useState('');

    const hanledInputChange = (e) =>{
        setInputValue(e.target.value);
        // console.log(e.target.value);
    }
    const hanledSubmit = (e) => {
        e.preventDefault();
        // console.log('submit hecho', inputValue);
        if(inputValue.trim().length>2){
            setCategories(cats => [ inputValue,...cats,]);
            setInputValue('');
        }
        
    }

    return (
        <form onSubmit={ hanledSubmit }>
            {/* <h1>{ inputValue }</h1> */}
            <p> { inputValue } </p>
            <input
                type='text'
                value={ inputValue }
                onChange={ hanledInputChange }
                
            />
        </form>
    )
}
AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
