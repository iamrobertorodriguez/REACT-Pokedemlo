import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Login from './Components/Login';
import Pokedex from './Components/Pokedex';
import Pokemon from './Components/Pokemon';
import ProtectedRoutes from './Components/ProtectedRoutes';

function App() {
  return (
    <HashRouter>
      <div className="App">
        <nav id='app-nav'>
          <h1>Pokédemlo</h1>
          <div id='nav-shadow1'></div>
          <div id='nav-shadow2'></div>
        </nav>
        <Routes>
          <Route path='/' element={ < Login /> }/>
          <Route element={ < ProtectedRoutes /> }>
            <Route path='/pokedex' element={ < Pokedex /> }/>
            <Route path='/pokedex/:id' element={ < Pokemon /> }/>
          </Route>
        </Routes>
        <footer id='app-footer'>
          <div id='nav-shadow2'></div>
          <div id='nav-shadow1'></div>
          <div id="footer-info">
            <p>API consumption example</p>
            <p>Endpoint: https://pokeapi.co/api/v2/pokemon?offset=0&limit=1126</p>
            <p>Contact:</p>
            <p>iamrobertorodriguez@proton.me</p>
            <p>iamrobertorodriguez.netlify.app</p>
            <p>Copyright © 2022: Roberto Rodríguez, México 55070</p>
            <p>Hecho con ❤ en Academlo.</p>
          </div>
        </footer>
      </div>
    </HashRouter>
  );
}

export default App;