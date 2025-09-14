import { fetchPuzzle, checkGuessSimilarity } from './api'
let puzzle = await fetchPuzzle()

export const snippets = puzzle.snippets

function initialHints() {
    let initialHints = []
    let i = 0
    for (let snippet of snippets) {
        initialHints.push({
            ...snippet,
            shown: i === 0, // first hint shown
        })
        i++
    }
    return initialHints
}

export let gameState = $state({
    guesses: [],
    score: 5,
    hints: initialHints(),
    solution: puzzle.solution,
})

export function checkStatus(game) {
    function checkWon() {
        for (let guess of game.guesses) {
            console.log(guess)
            if (guess.correct) return true
        }
        return false
    }
    function checkLost() {
        if (game.score <= 0) {
            return true
        } else return false
    }

    if (checkWon() == true && checkLost() == false) {
        return 'won'
    } else if (checkLost() == true) {
        return 'lost'
    } else return 'playing'
}

export function fetchShownHints() {
    /**
     * @param hints hints to look for (shown == true) in
     * @returns shown hints (snippet dict)
     */

    let output = []
    for (let hint of gameState.hints) if (hint?.shown == true) output.push(hint)
    return output
}

export function showHint() {
    let hintFound = false
    for (let hint of gameState.hints) {
        if (hint.shown == false) {
            hint.shown = true
            hintFound = true
        }
        if (hintFound == true) {
            break
        }
    }
}

// Guesses

export function checkCorrectness(guess) {
    return guess == puzzle.solution
}

class Guess {
    constructor(word) {
        this.word = word
    }

    get correct() {
        return this.findCorrectness()
    }

    async findSimilarity() {
        if (!this.similarity) {
            this.similarity = checkGuessSimilarity(this.word, puzzle.solution)
        }

        return this.similarity
    }

    findCorrectness() {
        return this.word == puzzle.solution
    }

    async findColor() {
        let similarity = await this.findSimilarity()

        if (similarity == 1) {
            return '#FE8E5E'
        } else if (similarity <= 0.2) {
            return '#FFEB5E'
        } else if (similarity <= 0.4) {
            return '#FFC75A'
        } else if (similarity <= 0.6) {
            return '#FFB260'
        } else {
            return '#FFA15F'
        }
    }
}

export async function processGuess(input) {
    let output = new Guess(input)
    gameState.guesses.push(output)
    return output
}

// Game state

export function correctGuessExists() {
    for (let guess of gameState.guesses) {
        if (guess.correct) {
            return true
        }
    }
    return false
}

// Utilities

export function normalize(text) {
    return text.toLowerCase().trim().replace(/[.!-]/g, '')
}

export function resetGame() {
    location.reload()
}
