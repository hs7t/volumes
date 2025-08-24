import { writable } from 'svelte/store'
import { fetchPuzzle } from './api'

export const score = writable(5) // TODO: move to config file
export const snippets = fetchPuzzle().snippets
export var guesses = $state([])

let initialHints = []
let i = 0
for (let snippet of snippets) {
    initialHints.push({
        ...snippet,
        shown: i === 0, // first hint shown
    })
    i++
}
export var hints = $state(initialHints)

export function fetchShownHints(hints) {
    /**
     * @param hints hints to look for (shown == true) in
     * @returns shown hints (snippet dict)
     */

    let output = []
    for (let hint of hints) if (hint?.shown == true) output.push(hint)
    return output
}

export function showHint() {
    let hintFound = false
    for (let hint of hints) {
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
    return guess == fetchPuzzle().answer
}

export function processGuess(input) {
    guesses.push({ content: input, correct: checkCorrectness(input) })
}

// Utilities

export function normalize(text) {
    return text.toLowerCase().trim()
}