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
        <div class="guess-reminder">
            <p>Your guesses:</p> 
            {#each gameState.guesses as guess}<span class="guess">{guess.content}</span>{/each}
        </div>
    {/if}
</div>

<style>
    @import '../style/shared.css';
    
    .guess-reminder {
        display: flex;
        flex-direction: column;
    }
    .guess-reminder .guess {
        text-decoration: line-through;
        margin-right: 1ch;
        background-color: var(--v-color-backgroundB);
        border-radius: var(--v-radius-secondary);
    }
</style>