import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import '../styles/login.css';

const Login = () => {

    const [ userName, setUserName ] = useState( "" )
    const dispatch = useDispatch(  )
    const navigate = useNavigate(  )

    const onSubmit = ( e ) => {
        e.preventDefault(  )
        dispatch( {
            type: "GET_USERNAME",
            payload: userName
        } )
        navigate( "/pokedex" )
    }

    return (
        <div className="login-screen">
            <div id='pokeball-vector'></div>
            <h1>
                HI, WE NEED YOUR NAME TO GET STARTED...
            </h1>
            <form onSubmit={ onSubmit }>
                <input 
                    type="text" 
                    placeholder='Enter your name'
                    maxLength='10'
                    onChange={ e => setUserName( e.target.value ) }
                    value={ userName }
                    required
                />
                <br/>
                <button type='submit'>
                    Ready
                </button>
            </form>
        </div>
    );
};

export default Login;