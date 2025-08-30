import { fetchPuzzle } from './api'
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

export function processGuess(input) {
    let output = { content: input, correct: checkCorrectness(input) }
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
    return text.toLowerCase().trim().replace(/[.!-]/g, "")
}

export function resetGame() {
    location.reload()
}