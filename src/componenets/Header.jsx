import '../App.css' 

import React, { useEffect, useState } from 'react';

 

function Header(props) {
    const {handleSearch}=props
   const [searchInput, setSearchInput]=useState("");
    

    function handleChange (event){
    const {value}=event.target
        setSearchInput(value); 
    }

    function handleSubmit(event){
        event.preventDefault();
       
        handleSearch(searchInput)
    }
    
 
 
    return (
        <div className='header'>
            <h3>
                Weather App
            </h3>
            <div>
               
                <input type='text' placeholder='Search Weather' value={searchInput} onChange={handleChange}/>
              
                 
            </div>
            <button type='submit' onClick={handleSubmit} >Search</button>
        </div>
    );
}

export default Header;