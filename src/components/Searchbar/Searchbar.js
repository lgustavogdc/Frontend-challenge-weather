import React from 'react';

import './Searchbar.css'

const Searchbar = () =>{
  return (
    <label className="searchbar-div">
      <input type="search" placeholder="Insira aqui o nome da cidade" className="searchbar" />
      <ion-icon name="search-outline" className="input-icon"></ion-icon>
    </label>
    
    )
  
}

export default Searchbar;