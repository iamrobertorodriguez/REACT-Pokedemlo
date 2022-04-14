import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/search-box.css';

const SearchBox = ( { pokemons } ) => {

    const navigate = useNavigate(  )
    const [ searchInputValue, setSearchInputValue ] = useState( '' )
    const [ filteredPokemons, setFilteredPokemons ] = useState( [  ] )
    const [ pokemonsArray ] = useState( [  ] )

    useEffect( (  ) => {

        const eventListener = (  ) => {
            setFilteredPokemons( [  ] )
        } 

        window.addEventListener( 'click', eventListener)
        for ( let i = 0 ; i < pokemons.length ;  i++ ) {
            let name = pokemons[ i ].name
            let url = pokemons[ i ].url.slice( 0, pokemons[ i ].url.length - 1 )
            let id = parseInt( url.slice( url.lastIndexOf( '/' ) + 1, url.length ) )
            let aux = { name: name, id: id }
            pokemonsArray.push( aux )
        }

        return (  ) => window.removeEventListener( 'click', eventListener )
    }, [ pokemons, pokemonsArray ] )

    const handleFilter = ( e ) => {
        if ( e.length === 0 ) {
            setFilteredPokemons( [  ] )
        }
        else {
            const pokemonSearch = e.toLowerCase(  )
            const newFilter = pokemonsArray.filter( ( pokemon ) => {
                return pokemon.name.toLowerCase(  ).includes( pokemonSearch )
            } )
            setFilteredPokemons( newFilter )
        }
    }

    return (
        <div className="search-box">
            <button
                onClick={ (  ) => { navigate( `/pokedex/${ searchInputValue }` ) }}
                className='search-btn'
            >	
                &#128270;
            </button>
            <input
                className='search-input'
                type="text"
                placeholder='Enter a pokemon name or ID'
                onChange={ ( e ) => {
                    setSearchInputValue( e.target.value )
                    handleFilter( e.target.value )
                } }
                value={ searchInputValue }
            />
        { filteredPokemons.length > 0 && (
            <div className='search-sug'>
                { filteredPokemons.map( ( pokemon ) => (
                    <ul key={ pokemon.id }>
                        <li onClick={ (  ) => {
                            navigate( `/pokedex/${ pokemon.id }` )
                        } }>
                            { pokemon.name.toUpperCase(  ) }
                        </li>
                    </ul>
                ) ) }
            </div>
            ) }
        </div>
    );
};

export default SearchBox;