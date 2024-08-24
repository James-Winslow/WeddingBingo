document.addEventListener('DOMContentLoaded', () => {
    const squares = document.querySelectorAll('.bingo-square');

    squares.forEach(square => {
        square.addEventListener('click', () => {
            square.classList.toggle('marked');
        });

        // Dynamically adjust font size
        const squareDiv = square.querySelector('div');
        adjustFontSize(squareDiv, square);
    });
});

function adjustFontSize(squareDiv, square) {
    let fontSize = 1; // Start with a base font size
    squareDiv.style.fontSize = `${fontSize}em`;

    // Reduce the font size until it fits within the square
    while (squareDiv.scrollHeight > square.clientHeight || squareDiv.scrollWidth > square.clientWidth) {
        fontSize -= 0.05;
        squareDiv.style.fontSize = `${fontSize}em`;

        // Prevent font size from going negative
        if (fontSize <= 0) break;
    }
}
