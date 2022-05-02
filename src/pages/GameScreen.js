import {useEffect, useState} from "react";
import Header from "../components/Header";
import GameOverModal from "../components/GameOverModal";
import PlayBoard from "../components/PlayBoard";

export default function GameScreen({players}){

    const [gameOver, setGameOver] = useState(false);
    const [drawStatus, setDrawStatus] = useState(false);

    const [currentPlayer, setCurrentPlayer] = useState(players[0])
    const [currentIcon, setCurrentIcon] = useState("x")

    const [icons, setIcons] = useState([<div/>,<div/>,<div/>,<div/>,<div/>,<div/>,<div/>,<div/>])
    const [gameState, setGameState] = useState(["", "", "", "", "", "", "", "", ""]);

    useEffect(()=>{
        setCurrentPlayer(getPlayerName())
    }, [currentIcon])

    function getPlayerName(){
        if (currentIcon==="x"){
            return players[0];
        }
        else if (currentIcon==="o"){
            return players[1];
        }
        else{
            return "";
        }
    }

    function resetGame(){
        setGameOver(false);
        setDrawStatus(false);
        setIcons([<div/>,<div/>,<div/>,<div/>,<div/>,<div/>,<div/>,<div/>]);
        setGameState(["", "", "", "", "", "", "", "", ""]);
        setCurrentIcon("x");
    }

    return (
        <div className={"d-block text-center justify-content-center"}>
            <Header
                currentPlayer={currentPlayer}
            />
            {
                gameOver ?
                    <GameOverModal
                        winner={currentPlayer}
                        drawStatus={drawStatus}
                        resetGame={resetGame}
                    />
                    :
                    <PlayBoard
                        gameOver={gameOver}
                        setGameOver={setGameOver}
                        currentIcon={currentIcon}
                        setCurrentIcon={setCurrentIcon}
                        icons={icons}
                        setIcons={setIcons}
                        gameState={gameState}
                        setGameState={setGameState}
                        setDrawStatus={setDrawStatus}
                    />
            }
        </div>
    )
}