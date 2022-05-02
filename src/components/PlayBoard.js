import React, {useState} from "react";
import Cell from "./Cell";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faX} from "@fortawesome/free-solid-svg-icons";
import {faO} from "@fortawesome/free-solid-svg-icons";

export default function PlayBoard({currentIcon, setCurrentIcon, setGameOver, gameOver, setDrawStatus, icons, setIcons, gameState, setGameState }){

    const winConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    function handleCellClicked(i){

        let gState = gameState;

        if(gState[i] === "" && !gameOver){
            gState[i] = currentIcon;
            setGameState(gState);
            redoIcons(gameState);
            checkForWin(gameState);
        }
    }

    function redoIcons(newGameState){

        let newIcons = []
        for(let index in newGameState){
            newIcons[index] = chooseIcon(newGameState[index])
        }
        setIcons(newIcons);
    }

    function changeActiveIcon(){
        if(currentIcon === "x"){
            setCurrentIcon("o");
        }else{
            setCurrentIcon("x");
        }
    }

    function checkForWin(){
        let won = false;
        for(let i = 0; i<8; i++){
            const winCond = winConditions[i];
            let a = gameState[winCond[0]];
            let b = gameState[winCond[1]];
            let c = gameState[winCond[2]];
            if (a === '' || b === '' || c === '') {
                continue;
            }
            if (a === b && b === c) {
                won = true;
                break
            }
        }

        if(won){
            setGameOver(true)
            return;
        }
        if(!gameState.includes("")){
            setDrawStatus(true);
            setGameOver(true)
        }
        else{
            changeActiveIcon();
        }
    }

    function chooseIcon(cellState){
        if(cellState === ""){
            return <div></div>
        }
        if(cellState === "x"){
            return <FontAwesomeIcon icon={faX}/>
        }
        if(cellState === "o"){
            return <FontAwesomeIcon icon={faO} />
        }
    }

    return (
        <div style={styles.PlayField}>
            <div style={styles.Row}>
                <Cell i={0} icon={icons[0]} handleCellClicked={handleCellClicked} />
                <Cell i={1} icon={icons[1]} handleCellClicked={handleCellClicked} />
                <Cell i={2} icon={icons[2]} handleCellClicked={handleCellClicked} />
            </div>
            <div style={styles.Row}>
                <Cell i={3} icon={icons[3]} handleCellClicked={handleCellClicked} />
                <Cell i={4} icon={icons[4]} handleCellClicked={handleCellClicked} />
                <Cell i={5} icon={icons[5]} handleCellClicked={handleCellClicked} />
            </div>
            <div style={styles.Row}>
                <Cell i={6} icon={icons[6]} handleCellClicked={handleCellClicked} />
                <Cell i={7} icon={icons[7]} handleCellClicked={handleCellClicked} />
                <Cell i={8} icon={icons[8]} handleCellClicked={handleCellClicked} />
            </div>
        </div>
    )
}

const styles = {
    PlayField:{
        marginTop: 10,
        alignItems: "center",
        justifyContent: "center",
    },
    Row: {
        display: "flex",
        justifyContent: "center"
    }

}