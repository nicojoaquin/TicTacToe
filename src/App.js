import { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import PrivateRoute from './PrivateRoute';
import Form from './components/Form';
import Game from './components/Game';

import './App.css';

function App() {
  const [turno, setTurno] = useState("");
  const [jugador1, setJugador1] = useState("");
  const [jugador2, setJugador2] = useState("");

  return (
    <Router>
      <Routes>
        <Route element={<PrivateRoute turno={turno} path={'/game'} />}>
          <Route path ='/' element={<Form
            setTurno={setTurno}
            jugador1={jugador1}
            jugador2={jugador2}
            setJugador1={setJugador1}
            setJugador2={setJugador2}
          />}/>
        </Route>   
        <Route element={<PrivateRoute turno={turno} path={'/'} />}>
          <Route path ='/game' element={<Game
            turno={turno}
            setTurno={setTurno}
            setJugador1={setJugador1}
            setJugador2={setJugador2}
            jugador1={jugador1}
            jugador2={jugador2}
          />}/>
        </Route>
      </Routes>
    </Router>

  );
}

export default App;
