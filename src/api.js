async function fromJSONFile(path) {
    const response = await fetch(path)
    const text = await response.text()
    
    return JSON.parse(text)
}

const config = await fromJSONFile(`${import.meta.env.BASE_URL}config.json`)
const apiURL = await config['volnet_api_url']

export async function fetchPuzzle() {
    const puzzleURL = new URL('v1/puzzles/latest', apiURL)
    let response = await fromJSONFile(puzzleURL)

    let puzzle = {
        solution: response.word,
    }

    return puzzle
}
