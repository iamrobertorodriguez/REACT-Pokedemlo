import axios from 'axios';
import React, { useEffect, useState } from 'react';
import LoadingScreen from './LoadingScreen';
import { Link } from 'react-router-dom';
import '../styles/pokemon-card.css';

const PokemonCard = ( { url } ) => {

    const [ pokemonInfo, setPokemonInfo ] = useState( {} )

    useEffect( (  ) => {
        axios
            .get( url )
            .then( res => setPokemonInfo( res.data ) )
    }, [ url ] )

    if ( pokemonInfo.sprites !== undefined ) {
        return (
            <div className="pokemon-card">
                <div className="pokemon-card-part1">
                    <div>
                        <img src={ pokemonInfo.sprites.front_default } alt={`${ pokemonInfo.name } image`} />
                    </div>
                </div>
                <div className="pokemon-card-part2" >
                    <p><b>No. </b>{ pokemonInfo.id }</p>
                    <h3>{ pokemonInfo.name?.toUpperCase(  ) }</h3>
                    <p><b>{ ( pokemonInfo.types.length <= 1 ) ?
                    'TYPE' : 'TYPES' }: </b>{
                        pokemonInfo.types.map( ( type ) => (
                            <span key={ type.type.url }>{ type.type.name.toUpperCase(  ) } </span>
                        ) )
                    }</p>
                    <p><b>HP: </b>{ pokemonInfo.stats[ 0 ].base_stat }</p>
                    <p><b>ATTACK: </b>{ pokemonInfo.stats[ 1 ].base_stat }</p>
                    <p><b>DEFENSE: </b>{ pokemonInfo.stats[ 2 ].base_stat }</p>
                    <p><b>SPEED: </b>{ pokemonInfo.stats[ 5 ].base_stat }</p>
                    <Link className='view-more' to={`/pokedex/${ pokemonInfo.id }`}><b>View more</b></Link>
                </div>
            </div>
        );}
    else {
        return < LoadingScreen />
    }
};

export default PokemonCard;