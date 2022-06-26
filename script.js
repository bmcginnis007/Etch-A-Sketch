let x = 0;

do{
    const square = document.createElement("div");
square.className = "squares";
square.setAttribute("id","block");
    document.getElementById("container").appendChild(square);
    x++;
}
while(x < 256);

document.getElementById("gridSize").addEventListener("click", function(){

    function resetgrid(){
        while(container.firstChild){
            container.removeChild(container.firstChild);
        }
    }
    resetgrid();
function btn(){
    let info = prompt("Please Select A Grid Size Between 1 - 100");
let gridSize = parseInt(info);
console.log(`${gridSize}`);
const cellSize = gridSize * gridSize;
console.log(`${cellSize}`);
if(info > 100){
    alert("Please choose a number less than 100");
   
}
else{
function changeGrid(){
    document.getElementById("container").style.setProperty('grid-template-columns', 'repeat(' + gridSize + ', auto)');
}
changeGrid();


let x = 0;

do{
    const square = document.createElement("div");
square.className = "squares";
square.setAttribute("id","block");
    document.getElementById("container").appendChild(square);
    x++;
}
while(x < cellSize);

var container = document.getElementById("container");
var cells = container.childNodes;

cells.forEach(cell => {
cell.onmouseover = function(){
cell.style.backgroundColor = "black";
}
});
}
}
btn();
})

var container = document.getElementById("container");
var cells = container.childNodes;

cells.forEach(cell => {
cell.onmouseover = function(){
cell.style.backgroundColor = "black";
}
});

document.getElementById("clearBtn").addEventListener("click", function(){
    cells.forEach(cell => {
        cell.style.backgroundColor = "white";
    })
})
