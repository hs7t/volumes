<script>
    import { score } from '../shared.svelte.js'

    let guesses = $state([])
    let input = $state("")

    const processSubmit = (event) => {
        guesses.push(input)
        $score -= 1
    }
</script>

<div class="card-area">
    <h2>What's today's word?</h2>
    <div id="answer-form">
        <div class="input">
            <label for="input">Type in a guess...</label>
            <input type="text" id="input" bind:value={input}>
        </div>
        <button onclick={processSubmit}>This is it!</button>
    </div>
    {#if (guesses.length > 0)}
    <p class="guess-reminder">Your guesses: {#each guesses as guess}<span class="guess">{guess}</span>{/each}</p>
    {/if}
</div>

<style>
    .input {
        display: inline-flex;
        gap: 1ch;
    }

    .guess-reminder .guess {
        text-decoration: line-through;
        margin-right: 1ch;
    }
</style>