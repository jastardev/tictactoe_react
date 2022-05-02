import {useNavigate} from "react-router-dom";

function GameOverModal({winner, resetGame, drawStatus}){

    const navigate = useNavigate();

    return (
        <div>
            <div
                style={styles.modalView}
            >
                <div style={styles.centeredView}>
                    <div style={styles.modalView}>
                        <div style={styles.heading}>Game Over</div>
                        {!drawStatus ? <div>{winner} Won!!</div> : <div>It was a draw!</div>}
                        <div style={styles.row}>
                            <button
                                style={styles.playAgainButton}
                                onClick={()=>resetGame()}
                            >
                                Play Again
                            </button>
                            <button
                                style={styles.quitButton}
                                onClick={()=>{
                                    resetGame();
                                    navigate("/");
                                }}
                            >
                                Quit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const styles = {
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10
    },
    modalView:{
        margin: 5,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 10,
        alignItems: "center",
        zIndex: 1
    },
    heading: {
        fontSize: 30
    },
    row:{
        marginTop: 10,
        alignItems: "center",
        flexDirection: "row"
    },
    playAgainButton: {
        marginLeft: 5,
        marginRight:5,
        width: 100,
        alignItems: "center",
        borderRadius: 15,
        backgroundColor: "#5ecbe0",
        padding: 10
    },
    quitButton:{
        marginLeft: 5,
        marginRight: 5,
        width: 100,
        alignItems: "center",
        borderRadius: 15,
        backgroundColor: "#d16464",
        padding: 10
    }
}

export default GameOverModal