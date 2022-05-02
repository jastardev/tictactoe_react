

export default function Header({currentPlayer}){

    return(
        <div style={styles.centeredView}>
            <h3 style={styles.text}>It is {currentPlayer}'s turn.</h3>
        </div>
    )

}

const styles = {
    centeredView: {
        justifyContent: "center",
        alignItems: "center",
        marginTop:10
    }
}