async function fromJSONFile(path) {
    const response = await fetch(path)

    const text = await response.text()
    console.log('Response:', text) // See what you're actually getting
    console.log('Status:', response.status)
    console.log('URL:', response.url)

    return JSON.parse(text)
}

const config = await fromJSONFile(`${import.meta.env.BASE_URL}config.json`)
const apiURL = await config['volnet_api_url']

export async function fetchPuzzle() {
    const puzzleURL = new URL('v1/puzzles/latest', apiURL)
    return fromJSONFile(puzzleURL)
}
