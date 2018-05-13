import React from 'react';
import './search.css';

const Search = (props) => (
    <form 
        className="Search"
        onSubmit={props.handleSubmit}
    >
        <input 
            className="Search-input" 
            type="text"
            placeholder="Busca tu video Favorito"
            name="search"
            ref={props.setRef}
            onChange={props.handleChange}
            value={props.value}
            //defaultValue="Luis Fonsi"
        />
    </form>
)

export default Search;
