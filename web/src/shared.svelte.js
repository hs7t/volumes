import { writable } from 'svelte/store'
import { fetchSnippets } from './api'

export const score = writable(0)
export const snippets = fetchSnippets()
