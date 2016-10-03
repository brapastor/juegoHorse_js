function ClearBoard() {
    for(var i=0; i<8; i++){
        for(var j=0; j<8; j++){
            board[i][j]=0;
        }
    }
}

function PaintCell(x,y,color){
    var cell = document.getElementById("c"+x+y);
    cell.style.background = color;
}

function PaintHorseCell(x,y,color){
    var cell = document.getElementById("c"+x+y);
    cell.style.background = color;
    cell.innerHTML = "<img src='horse.gif' />"
}