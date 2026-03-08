const STORAGE_KEY = 'weddingBingo_markedSquares';

document.addEventListener('DOMContentLoaded', () => {
    const squares = document.querySelectorAll('.bingo-square:not(.free-square)');

    // Restore marked state from localStorage
    const saved = getSavedState();
    squares.forEach((square, index) => {
        if (saved.includes(index)) {
            square.classList.add('marked');
        }

        // Adjust font size to fit
        const span = square.querySelector('span');
        adjustFontSize(span, square);

        // Click to toggle mark
        square.addEventListener('click', () => {
            square.classList.toggle('marked');
            saveState(squares);
        });
    });
});

function getSavedState() {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        return raw ? JSON.parse(raw) : [];
    } catch {
        return [];
    }
}

function saveState(squares) {
    const marked = [];
    squares.forEach((square, index) => {
        if (square.classList.contains('marked')) marked.push(index);
    });
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(marked));
    } catch {
        // localStorage unavailable — silently fail, marking still works in-session
    }
}

function newCard() {
    try {
        localStorage.removeItem(STORAGE_KEY);
    } catch {
        // ignore
    }
    window.location.reload();
}

function adjustFontSize(span, square) {
    let fontSize = 1;
    span.style.fontSize = `${fontSize}em`;

    while (
        (span.scrollHeight > square.clientHeight || span.scrollWidth > square.clientWidth)
        && fontSize > 0.3
    ) {
        fontSize -= 0.05;
        span.style.fontSize = `${fontSize}em`;
    }
}
