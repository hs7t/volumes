async function fromJSONFile(path) {
    const file = (await fetch(path)).json()
    return JSON.parse(await file)
}

const config = fromJSONFile('./config.json')
const apiURL = config['volnet_api_url']

export const fetchPuzzle = () => {
    const puzzleURL = new URL('/puzzles/', apiURL)
    return fromJSONFile(puzzleURL)
}
