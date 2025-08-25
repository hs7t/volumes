import { fetchPuzzle } from './api'

export const snippets = fetchPuzzle().snippets

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

export const gameState = $state({
    guesses: [],
    score: 5,
    hints: initialHints(),
})

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
    return guess == fetchPuzzle().solution
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
    return text.toLowerCase().trim()
}
