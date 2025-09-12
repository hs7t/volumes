<script>
    import { processGuess, gameState, normalize } from '../shared.svelte'
    import TextInput from './components/TextInput.svelte'

    let input = $state("")
    let processSubmit = () => {
        if (!(input === "" || input === undefined || input === null)) {
            input = normalize(input)
            let processedGuess = processGuess(input)
            if (!processedGuess.correct) {
                gameState.score -= 1
            }
        }
    }
</script>

<div class="card-area">
    <h2>What's today's word?</h2>
    <TextInput bind:input={input} action={processSubmit} inputLabel="Type in a guess..." buttonLabel="This is it!"></TextInput>

    {#if (gameState.guesses.length > 0)}
        <p class="guess-reminder">Your guesses: {#each gameState.guesses as guess}<span class="guess">{guess.content}</span>{/each}</p>
    {/if}
</div>

<style>
    .guess-reminder .guess {
        text-decoration: line-through;
        margin-right: 1ch;
    }
</style>