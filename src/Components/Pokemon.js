import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import LoadingScreen from './LoadingScreen';
import '../styles/pokemon.css';

const Pokemon = () => {

    const { id } = useParams(  );
    const [ pokemonInfo, setPokemonInfo ] = useState( {  } )

    useEffect( (  ) => {
        axios
            .get( `https://pokeapi.co/api/v2/pokemon/${ id }` )
            .then( res => setPokemonInfo( res.data ) )
    }, [ id ] )

    if ( pokemonInfo.sprites ) {
        return (
            <div id='pokemon-screen'>
                <div className='pokemon-detailed'>
                    <div className='info-box name'>
                        <div className='info-box-part1'>
                            <h3><b>No. </b>{ pokemonInfo.id }</h3>
                            <img width='20px' src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/fe48665f-9fb2-4bc1-b2df-60d8fbdd82a0/dcyr9or-c77d5729-8279-4837-868c-8e664b50fe87.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2ZlNDg2NjVmLTlmYjItNGJjMS1iMmRmLTYwZDhmYmRkODJhMFwvZGN5cjlvci1jNzdkNTcyOS04Mjc5LTQ4MzctODY4Yy04ZTY2NGI1MGZlODcuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.mP3DK2y0asEU6IZ9-LGszcgOsYHDttCnT3iWi6fHKfU" alt="pokeball" />
                        </div>
                        <div className='info-box-part2'>
                            <h3>{ pokemonInfo.name.toUpperCase(  ) }</h3>
                        </div>
                    </div>
                    <div className="images-wrapper">
                        <img src={ pokemonInfo.sprites.front_default } alt={ pokemonInfo.name } />
                        <div className='image-platform'></div>
                    </div>
                    <div className='general-info'>
                        <p><b>WEIGHT: </b>{ pokemonInfo.weight / 10 } kg</p>
                        <p><b>HEIGHT: </b>{ pokemonInfo.height / 10 } m</p>
                        <p><b>HP: </b>{ pokemonInfo.stats[ 0 ].base_stat }</p>
                        <p><b>ATTACK: </b>{ pokemonInfo.stats[ 1 ].base_stat }</p>
                        <p><b>SPECIAL ATTACK: </b>{ pokemonInfo.stats[ 3 ].base_stat }</p>
                        <p><b>DEFENSE: </b>{ pokemonInfo.stats[ 2 ].base_stat }</p>
                        <p><b>SPECIAL DEFENSE: </b>{ pokemonInfo.stats[ 4 ].base_stat }</p>
                        <p><b>SPEED: </b>{ pokemonInfo.stats[ 5 ].base_stat }</p>
                    </div>
                    <div className="info-box types">
                        <div className="info-box-part1">
                            <b>
                                { 
                                    ( pokemonInfo.types.length <= 1 )?'TYPE':'TYPES' 
                                } 
                            </b>
                            <img width='20px' src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/fe48665f-9fb2-4bc1-b2df-60d8fbdd82a0/dcyr9or-c77d5729-8279-4837-868c-8e664b50fe87.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2ZlNDg2NjVmLTlmYjItNGJjMS1iMmRmLTYwZDhmYmRkODJhMFwvZGN5cjlvci1jNzdkNTcyOS04Mjc5LTQ4MzctODY4Yy04ZTY2NGI1MGZlODcuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.mP3DK2y0asEU6IZ9-LGszcgOsYHDttCnT3iWi6fHKfU" alt="pokeball" />
                        </div>
                        <div className="info-box-part2">
                            {
                                pokemonInfo.types.map( ( type ) => (
                                    <li key={ type.type.url }>{ type.type.name.toUpperCase(  ) }</li>
                                ) )
                            }
                        </div>
                    </div>
                    <div className="info-box abilities">
                        <div className="info-box-part1">
                            <b>
                                { ( pokemonInfo.abilities.length <= 1 )?'ABILITY':'ABILITIES' } 
                            </b>
                            <img width='20px' src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/fe48665f-9fb2-4bc1-b2df-60d8fbdd82a0/dcyr9or-c77d5729-8279-4837-868c-8e664b50fe87.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2ZlNDg2NjVmLTlmYjItNGJjMS1iMmRmLTYwZDhmYmRkODJhMFwvZGN5cjlvci1jNzdkNTcyOS04Mjc5LTQ4MzctODY4Yy04ZTY2NGI1MGZlODcuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.mP3DK2y0asEU6IZ9-LGszcgOsYHDttCnT3iWi6fHKfU" alt="pokeball" />
                        </div>
                        <div className="info-box-part2">
                            {
                                pokemonInfo.abilities.map( ( ability ) => (
                                    <li key={ ability.ability.url }>{ ability.ability.name.toUpperCase(  ) }</li>
                                ) )
                            }
                        </div>
                    </div>
                    <div className="info-box moves">
                        <div className="info-box-part1">
                            <b>
                                { ( pokemonInfo.moves.length <= 1 ) ?
                                'MOVE (scroll)' : 'MOVES (scroll)' }
                            </b>
                            <img width='20px' src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/fe48665f-9fb2-4bc1-b2df-60d8fbdd82a0/dcyr9or-c77d5729-8279-4837-868c-8e664b50fe87.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2ZlNDg2NjVmLTlmYjItNGJjMS1iMmRmLTYwZDhmYmRkODJhMFwvZGN5cjlvci1jNzdkNTcyOS04Mjc5LTQ4MzctODY4Yy04ZTY2NGI1MGZlODcuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.mP3DK2y0asEU6IZ9-LGszcgOsYHDttCnT3iWi6fHKfU" alt="pokeball" />
                        </div>
                        <div className="info-box-part2">
                            {
                                pokemonInfo.moves.length === 0 && 
                                <li>NO MOVES TO SHOW</li>
                            }
                            {
                                pokemonInfo.moves.map( ( move ) => (
                                    <li key={ move.move.url }>{ move.move.name.toUpperCase(  ) }</li>
                                ) )
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    else {
        return < LoadingScreen />
    }
};

export default Pokemon;