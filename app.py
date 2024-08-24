from flask import Flask, render_template
import random

app = Flask(__name__)

@app.route('/')
def bingo():
    # List of all bingo square texts, except for "Corey"
    bingo_texts = [
        "Spilled Drink", "Someone Trips", "Corey", "Controversial Politics",
        "Long homily", "Shots!", "Zag flag", "Parents kiss", "YMCA", "Vanilla cake",
        "Asleep @ mass", "A Gonzaga chant", "Cringey toast",
        "A child shows up", "Snoozie appearance", "Fly down",
        "Blood or vomit", "Someone flirts with Jimmy", "Rehearsed first dance",
        "Country mother/son dance", "Classical mother/son dance",
        "Wrong suit", "Nick cries", "Antonia Slays"
    ]

    # Shuffle the list
    random.shuffle(bingo_texts)

    # Insert "Corey" into the center of the grid
    bingo_board = []
    count = 0
    for i in range(5):
        row = []
        for j in range(5):
            if i == 2 and j == 2:
                row.append("Someone yells BINGO")
            else:
                row.append(bingo_texts[count])
                count += 1
        bingo_board.append(row)

    return render_template('bingo.html', bingo_board=bingo_board)

if __name__ == '__main__':
    app.run(debug=True)
