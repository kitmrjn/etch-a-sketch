const container = document.querySelector(".container");
const boxes = document.querySelector(".boxes");
const boxHolder = document.querySelector(".boxHolder");


let grid = 16;

for (let i = 0; i < grid; i++) {
    const div = document.createElement("div");
    div.setAttribute("class", "boxHolder");
    container.appendChild(div);

    for (let j = 0; j < grid; j++) {
        const innerBox = document.createElement("div");
        innerBox.setAttribute("class", "boxes");
        div.appendChild(innerBox);  
    }
        
};






