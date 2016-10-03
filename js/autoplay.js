
var Total_secs;
var Total_mins;
var cronometer;

var board = new Array(8);

var CellSelected_x;
var CellSelected_y;

var Moves;

function CheckSuccessfullEnd() {
   var SuccessfullEnd = true;
    if(Moves > 0) SuccessfullEnd = false;
    if (SuccessfullEnd) alert("Partida ganada");
}

function CheckGameOver() {
    var options = 0;

    Check_Moves(1,2); // check mover right - top long
    Check_Moves(2,1); // check mover right long - top
    Check_Moves(1,-2); // check mover right - bottom long
    Check_Moves(-2,-1); // check mover right - bottom long

    Check_Moves(-1,2); // check mover left - top long
    Check_Moves(-2,1); // check mover left long - top
    Check_Moves(-1,-2); // check mover left - bottom long
    Check_Moves(-2,-1); // check mover left - bottom long


    document.getElementById("options").innerHTML = options;
    if(!options) alert("Game over");
}

// function Check_Moves(mvox,movy) {
//     option_x = x + mvox;
//     option_y =
//
//
// }

function SelectCell(x,y){

    Moves--;
    document.getElementById("moves").innerHTML = Moves;
    board[x][y] = 1;
    PaintCell(CellSelected_x,CellSelected_y, "orange");
    PaintHorseCell(x,y, "green");
    CellSelected_x = x;
    CellSelected_y = y;

    CheckSuccessfullEnd();
    CheckGameOver();
}

function CheckCell(x,y) {
    var CheckTrue = false;
    var dif_x = x - CellSelected_x;
    var dif_y = y - CellSelected_y;

    if(dif_x == 1 && dif_y == -2) CheckTrue = true; //right - top long
    if(dif_x == 2 && dif_y == -1) CheckTrue = true; //right long - bottom
    if(dif_x == 1 && dif_y == 2) CheckTrue = true; //right - top long
    if(dif_x == 2 && dif_y == 1) CheckTrue = true; //right long - top

    if(dif_x == -1 && dif_y == -2) CheckTrue = true; //left - bottom long
    if(dif_x == -2 && dif_y == -1) CheckTrue = true; //left long - bottom
    if(dif_x == -1 && dif_y == 2) CheckTrue = true; //left - top long
    if(dif_x == -2 && dif_y == 1) CheckTrue = true; //left long - top

    if(board[x][y]==1) CheckTrue = false;

    if (CheckTrue) SelectCell(x,y)

}

function autoplay() {
    //Creando matriz
    for(var i = 0; i < 8 ; i ++){
        board[i] = new Array(8);
    }

    Moves = 64;


    ClearBoard();
    ResetTime();
    StarTime();

    var x=Math.round(Math.random()*7);
    var y=Math.round(Math.random()*7);

    CellSelected_x = x;
    CellSelected_y = y;
    SelectCell(x,y);
}
autoplay();

