import { writable } from 'svelte/store'
import { fetchSnippets } from './api'

export const score = writable(5) // TODO: move somewhere else
export const snippets = fetchSnippets()
