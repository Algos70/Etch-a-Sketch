function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
function addDiv(container) {
    const div = document.createElement('div');
    div.classList.add('item');
   //div.textContent = '1';
    container.appendChild(div);
}

//vars for createGrids

let columnsAndRows = 16;

function createGrid() {
    let container = document.createElement('div');
    container = document.createElement('div');
    
    container.classList.add('container');

    for(let i = 0; i < columnsAndRows * columnsAndRows; i++) {
        addDiv(container);
    }
    document.body.appendChild(container);
    container.style.gridTemplateColumns = `repeat(${columnsAndRows}, auto)`;
}



function colorChange() {
    const items = document.querySelectorAll('.item');
    items.forEach((item) => {
        item.addEventListener('mouseover', () => {
            item.setAttribute('style', `background-color: rgb(${getRandomInt(256)}, ${getRandomInt(256)}, ${getRandomInt(256)});`);
        })
    })
    
    
}

function createButton() {
    const btn = document.createElement('button');
btn.textContent = 'Create a new canvas';
btn.addEventListener('click', () => {
    const container = document.querySelector('.container');
    document.body.removeChild(container);
    columnsAndRows = prompt('How many columns and rows you want: ');
    
    if (columnsAndRows > 100) {
        columnsAndRows = 100;
    }

    
    
    createGrid();
    colorChange();
})

document.body.appendChild(btn);

}

createGrid();
colorChange();
createButton();







