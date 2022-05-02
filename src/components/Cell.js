
export default function Cell({i, icon, handleCellClicked}){

    function drawCell(){
        let cellStyle = {
            width: 50,
            height: 50,
            display: "grid",
            justifyContent: "center",
            alignItems: "center"
        };

        if(i<3){
            cellStyle.borderBottom = "solid"
            cellStyle.borderBottomColor = "black";
            cellStyle.borderBottomWidth = 2;
        }
        if(i % 3 === 0){
            cellStyle.borderRight = "solid"
            cellStyle.borderRightColor = "black";
            cellStyle.borderRightWidth = 2;
        }
        if(i % 3 === 2){
            cellStyle.borderLeft = "solid"
            cellStyle.borderLeftColor = "black";
            cellStyle.borderLeftWidth = 2;
        }
        if(i>5){
            cellStyle.borderTop = "solid"
            cellStyle.borderTopColor = "black";
            cellStyle.borderTopWidth = 2;
        }

        return cellStyle;
    }


    return (
        <div style={drawCell()} onClick={()=>handleCellClicked(i)}>
            {icon}
        </div>
    )
}