import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
    //const categories = ['One punch','Samurai X','Dragon ball']


    const [categories, setCategories] = useState(['Dragon ball']);
    
    // const hadledAdd = () =>{
    //     setCategories([...categories, 'HunterXHunter']);
    //     setCategories( cats => [...cats, 'HunterXHunter']);
    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories = { setCategories }/>
            <hr/>
            {/* <button onClick={ hadledAdd }>Agregar</button> */}
            <ol>
                {
                    categories.map(category =>
                        <GifGrid 
                            category = { category }
                            key = { category }
                        
                        />
                    )
                }
            </ol>
           
        </>
    );
}
