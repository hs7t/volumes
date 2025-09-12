async function fromJSONFile(path) {
    return fetch(path).then((r) => r.json())
}

const config = await fromJSONFile(`${import.meta.env.BASE_URL}config.json`)
const apiURL = config['volnet_api_url']

export async function fetchPuzzle() {
    const puzzleURL = new URL('v1/puzzles/latest', apiURL)
    let response = await fromJSONFile(puzzleURL)

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
