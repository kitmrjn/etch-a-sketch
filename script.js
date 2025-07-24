const container = document.querySelector(".container");
const boxes = document.querySelector(".boxes");
const boxHolder = document.querySelector(".boxHolder");
const changeGrid = document.querySelector(".changeGrid");
const rainbowButton = document.querySelector("#rainbowButton");
const resetButton = document.querySelector("#resetButton");



let gridSize = 16;

function createGrid (size) {
    
    container.innerHTML = "";

    for (let i = 0; i < size; i++) {
    const div = document.createElement("div");
    div.setAttribute("class", "boxHolder");
    container.appendChild(div);

    for (let j = 0; j < size; j++) {
        const innerBox = document.createElement("div");
        innerBox.setAttribute("class", "boxes");
        div.appendChild(innerBox);  

        innerBox.addEventListener("mouseenter", () => {
            innerBox.style.backgroundColor = "#727D73";
        });

        rainbowButton.addEventListener("click", () => {
           innerBox.addEventListener("mouseenter", () => {
            innerBox.style.backgroundColor = getRandomColor();
        });
        });

        resetButton.addEventListener("click", () => {
            innerBox.style.backgroundColor = "#D0DDD0";
        })
    };
};
};

createGrid(gridSize);

changeGrid.addEventListener("click", () => {
    const input = prompt("Enter a number from 2-100", );
    const newSize = parseInt(input);

    if (newSize >= 2 && newSize <= 100) {
        gridSize = newSize;
        createGrid(gridSize);
        console.log(`Your number is: ${gridSize}`);
    } else {
        alert("Please enter a valid number");
    };
});


function getRandomColor() {
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  };
  return color;
};











