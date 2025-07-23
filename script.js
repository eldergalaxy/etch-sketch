const container = document.getElementById('container');
for (let i = 0; i < 4096; i ++) {
    const box = document.createElement('div');
    box.classList.add('square');
    container.appendChild(box);
}

const squares = document.querySelectorAll('.square');

squares.forEach(square => {
    square.addEventListener('mouseover', () => {
        square.style.backgroundColor = 'rgb(247 ,247,247)';
    });
});

const clearButton = document.getElementById('clearButton');
clearButton.addEventListener('click', function() {
  const squares = document.querySelectorAll('.square');
  for (let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = 'lightblue';
  }
});