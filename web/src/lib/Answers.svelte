<script>
    import { score } from '../shared.svelte.js'
    import TextInput from './components/TextInput.svelte';

    let guesses = $state([])
    let input = $state("")

    const processSubmit = (event) => {
        guesses.push(input)
        $score -= 1
    }
</script>

<div class="card-area">
    <h2>What's today's word?</h2>
    <TextInput bind:input={input} action={processSubmit} inputLabel="Type a guess in..." buttonLabel="This is it!"></TextInput>
    {#if (guesses.length > 0)}
    <p class="guess-reminder">Your guesses: {#each guesses as guess}<span class="guess">{guess}</span>{/each}</p>
    {/if}
</div>

<style>
    .guess-reminder .guess {
        text-decoration: line-through;
        margin-right: 1ch;
    }
</style>