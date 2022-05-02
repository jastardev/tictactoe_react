import { useNavigate } from "react-router-dom";

function StartScreen({players,setPlayerOne, setPlayerTwo}){
    const navigate = useNavigate();

    function handleStart(){
        navigate("/InGame")
    }

    return (
        <div style={styles.container}>
            <div style={styles.heading}>Welcome To The Game</div>
            <div style={styles.instructions}>Enter the player's names.</div>
            <div style={styles.inputRow}>
                <label style={styles.playerHeading}>Player One (X's):</label>
                <input
                    style={styles.inputStyle}
                    autoCapitalize={"none"}
                    autoComplete={"false"}
                    value={players[0]}
                    onChange={(e)=>setPlayerOne(e.target.value) }
                />
            </div>
            <div style={styles.inputRow}>
                <label style={styles.playerHeading}>Player Two (O's):</label>
                <input
                    style={styles.inputStyle}
                    autoCapitalize={"none"}
                    autoComplete={"false"}
                    value={players[1]}
                    onChange={(e)=>setPlayerTwo(e.target.value) }
                />
            </div>
            <div style={styles.inputRow}>
                <button style={styles.startButton} onClick={()=>handleStart()}>Start Game</button>
            </div>
        </div>
    )
}

const styles = {
    container:{
        paddingRight: 10,
        paddingLeft: 10
    },
    heading:{
        textAlign: "center",
        marginTop: 10,
        fontSize: 36
    },
    instructions:{
        textAlign: "center",
        fontSize: 24
    },
    screenView:{

    },
    playerHeading:{
        fontSize: 18,
        textAlign: "center",
        flexDirection: "column",
        alignSelf: "center"
    },
    inputRow:{
        textAlign: "center",
        marginTop: 5,
        flexDirection: 'row',
    },
    inputStyle:{
        flex: 1,
        fontSize: 18,
        height: 40,
        borderRadius: 5,
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 5,
        paddingLeft: 5,
        paddingRight: 5,
        backgroundColor: '#cfcfcf',
        flexDirection: 'row'
    },
    startButton:{
        marginTop: 10,
        alignSelf: "center",
        width: 200,
        alignItems: "center",
        borderRadius: 10,
        backgroundColor: "#5ecbe0",
        padding: 10
    }
}

export default StartScreen;