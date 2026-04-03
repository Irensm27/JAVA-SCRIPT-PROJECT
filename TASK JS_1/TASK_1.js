const input = document.getElementById('input');
const buttonAdd = document.getElementById('Add');
const listDiv = document.getElementById('list');
const buttonSortByName = document.getElementById('SortByName');
const buttonSortByValue = document.getElementById('SortByValue');
const buttonDelete = document.getElementById('Delete');

let pairs = [];

function isValid(input) {
    const regex = /^[a-zA-Z0-9]+\s*=\s*[a-zA-Z0-9]+$/;
    return regex.test(input);
}
function parseInput(input) {
    const [name, value] = input.split('=').map(item => item.trim());
    return { name, value };
}
function render() {
    listDiv.innerHTML = '';

    pairs.forEach((pair, index) => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('itemDiv');

        itemDiv.innerHTML = `
            <input type="checkbox" data-index="${index}">
            <span>${pair.name} = ${pair.value}</span>
        `;

        listDiv.appendChild(itemDiv);
    });
}
buttonAdd.onclick = () => {
    const value = input.value.trim();
    if (!isValid(value)) {
        alert('Wrong format!');
        return;
    }
    const pair = parseInput(value);
    pairs.push(pair);
    render();
    input.value = '';
};
buttonSortByName.onclick = () => {
    pairs.sort((a, b) => a.name.localeCompare(b.name));
    render();
}
buttonSortByValue.onclick = () => {
    pairs.sort((a, b) => a.value.localeCompare(b.value));
    render();
}
buttonDelete.onclick = () => {
    const boxes = document.querySelectorAll('input[type="checkbox"]:checked');
    const indexes = Array.from(boxes)
        .map(cb => Number(cb.dataset.index))
        .sort((a,b) => b - a); // сортуємо по спадання
    indexes.forEach(i => pairs.splice(i, 1));

    render();
};

