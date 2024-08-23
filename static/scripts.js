document.addEventListener('DOMContentLoaded', () => {
    const squares = document.querySelectorAll('.bingo-square');
    squares.forEach(square => {
        square.addEventListener('click', () => {
            square.classList.toggle('marked');
        });
    });
});
