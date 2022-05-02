import 'bootstrap/dist/css/bootstrap.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import StartScreen from "./pages/StartScreen";
import GameScreen from "./pages/GameScreen";
import {useRef, useState} from "react";

function App() {

    const [playerOne, setPlayerOne] = useState("")
    const [playerTwo, setPlayerTwo] = useState("")

    const players=[playerOne, playerTwo]

    return (
        <div>
            <nav className="navbar  navbar-light bg-light text-center d-block text-center">
                <h2>Tic-Tac-Toe</h2>
            </nav>
            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={<StartScreen players={players} setPlayerOne={setPlayerOne} setPlayerTwo={setPlayerTwo} />} />
                    <Route path={"/InGame"} element={<GameScreen players={players} />}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
