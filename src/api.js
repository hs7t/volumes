async function fetchFromJSON(path) {
    return fetch(path).then((r) => r.json())
}

const config = await fetchFromJSON(`${import.meta.env.BASE_URL}config.json`)
const apiURL = config['volnet_api_url']

export async function fetchPuzzle() {
    const queryURL = new URL('puzzles/latest', apiURL)
    const response = await fetchFromJSON(queryURL)

    let puzzle = {
        solution: response.word,
        snippets: (response.snippets ?? []).map((snippet) => ({
            content: snippet.text,
            source: snippet.source.publication,
            by: snippet.source.author,
            date: snippet.year,
        })),
    }

    return puzzle
}

export async function checkGuessSimilarity(guess, solution = undefined) {
    let query = `similarity/${guess}`
    if (solution) query += `?solution=${solution}`
    const queryURL = new URL(query, apiURL)

    const response = fetchFromJSON(queryURL)

    try {
        return Number(response)
    } catch (error) {
        console.error(error)
        return undefined
    }
}
