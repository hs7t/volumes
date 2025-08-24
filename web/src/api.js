export const fetchSnippets = () => {
    return fetchPuzzle().snippets
}

export const fetchPuzzle = () => {
    return {
        snippets: [
            {
                content: 'I bet on {losing} dogs',
                source: '"Puberty"',
                by: 'Mitski',
                date: '2016',
            },
            {
                content: "I'm {losing} my temper",
                source: 'Trust me bro',
                by: 'Me',
                date: '2025',
            },
        ],
        solution: 'losing',
    }
}