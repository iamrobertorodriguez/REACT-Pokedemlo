import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Pagination from './Pagination';
import PokemonCard from './PokemonCard';
import SearchBox from './SearchBox';
import '../styles/pokedex.css';

const Pokedex = () => {

    const userName = useSelector( state => state.userName )
    const [ pokemons, setPokemons ] = useState( [  ] )
    const [ currentPage, setCurrentPage ] = useState( 1 )
    const [ cardPerPage, setCardPerPage ] = useState( 12 )
    const lastIndex = currentPage * cardPerPage
    const firstIndex = lastIndex - cardPerPage
    const [ pokemonTypes, setPokemonTypes ] = useState( [  ] )
    const [ typeResidents, setTypeResidents ] = useState( [ ] )

    useEffect( (  ) => {
        axios
            .get( 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=1126' )
            .then( res => setPokemons( res.data.results ) )

        axios
            .get( 'https://pokeapi.co/api/v2/type' )
            .then( ( res ) => { setPokemonTypes( res.data.results ) } )
    }, [  ] )

    const currentCards = pokemons.slice( firstIndex, lastIndex )

    const handleTypes = ( e ) => {
        if ( e !== "all" ) {
            axios
                .get( e )
                .then( ( res ) => {
                    setTypeResidents( [  ] )
                    for ( let i = 0 ; i < res.data.pokemon.length ; i++ ) {
                        typeResidents.push( res.data.pokemon[ i ].pokemon )
                    }
                    setPokemons( typeResidents )
                    setCurrentPage( 1 )
                } )
        }
        else {
            axios
                .get( 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=1126' )
                .then( ( res ) => {
                    setTypeResidents( [  ] )
                    setPokemons( res.data.results )
                    setCurrentPage( 1 )
                } )
        }
    }

    return (
        <div>
            <div className="pokedex-screen">
                <div className="pokedex">
                    <div id='waving' className="info-box">
                        <div className="info-box-part1">
                            <h2>HELLO THERE, { userName.toUpperCase(  ) }</h2>
                        </div>
                        <div className="info-box-part2">
                            <h4>HERE YOU CAN GO STRAIGHT TO YOUR FAV POKEMON...</h4>
                        < SearchBox
                            pokemons={ pokemons }
                            />
                        </div>
                    </div>
                    <div className="info-box2">

                    </div>
                    <div className="filters">
                        <div className="panel1"></div>
                        <div className="content">
                            <div>
                                <select onChange={ ( e ) => { handleTypes( e.target.value ) } }>
                                    <option value="all">All Pokemon Types</option>
                                    { pokemonTypes.map( ( type ) => (
                                        <option 
                                            value={ type.url } 
                                            key={ type.url }
                                        >
                                            { type.name }
                                        </option>
                                    ) ) }
                                </select>
                            </div>
                            <div>
                                <input 
                                    id='pokemons-per-page'
                                    type="range" 
                                    min='6'
                                    max='24'
                                    step='1'
                                    value={ cardPerPage }
                                    onChange={ ( e ) => {
                                        setCardPerPage( e.target.value )
                                    } }
                                />
                                <br/>
                                <label htmlFor="pokemons-per-page">
                                    &nbsp; Pokemons per page: { cardPerPage }
                                </label>
                            </div>
                        </div>
                        <div className="panel2"></div>
                    </div>
                    <ul className='cards-list'>
                        { currentCards.map( ( card ) => (
                            <li key={ card.url }>
                                < PokemonCard 
                                    url={ card.url }
                                />
                            </li>
                        ) ) }
                    </ul>
                    < Pagination
                        cardPerPage={ cardPerPage } 
                        totalCards={ pokemons.length } 
                        setCurrentPage={ setCurrentPage }
                        currentPage={ currentPage }
                    />
                </div>
            </div>
        </div>
    );
};

export default Pokedex;