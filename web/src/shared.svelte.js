import { writable } from 'svelte/store'
import { fetchSnippets } from './api'

export const score = writable(5) // TODO: move to config file
export const snippets = fetchSnippets()

let initialHints = []
let i = 0
for (let snippet of snippets) {
    initialHints.push({
        ...snippet,
        shown: i == 0, // first hint shown
    })
    i++
}
export var hints = $state(initialHints)

export function fetchShownHints(hints) {
    /**
     * @param hints hints to look for (shown == true) in
     * @returns shown hints (snippet dict)
     */
    let shownHints = () => {
        let output = []
        for (let hint of hints) if (hint?.shown == true) output.push(hint)
        return output
    }
    return shownHints
}

export function showHint() {
    for (let hint of hints) {
    }
}