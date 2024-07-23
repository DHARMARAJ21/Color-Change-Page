const button = document.getElementById('color-button');
const colorName = document.getElementById('color-name');
let isRed = true;

button.addEventListener('click', () => {
    if (isRed) {
        document.body.style.backgroundColor = 'blue';
        colorName.textContent = 'Blue';
        colorName.style.color = 'red';
        button.style.backgroundColor = 'blue';
    } else {
        document.body.style.backgroundColor = 'red';
        colorName.textContent = 'Red';
        colorName.style.color = 'Blue';
        button.style.backgroundColor = 'red';
    }
    isRed = !isRed;
});
