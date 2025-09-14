<script>
    import { processGuess, gameState, normalize } from '../shared.svelte'
    import TextInput from './components/TextInput.svelte'

    let input = $state("")
    let processSubmit = async () => {
        if (!(input === "" || input === undefined || input === null)) {
            input = normalize(input)
            let processedGuess = await processGuess(input)
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
            {#each gameState.guesses as guess}<span class="guess" style="--l-backgroundColor={guess?.appearance?.color}">{guess.content}</span>{/each}
        </div>
    {/if}
</div>

<style>
    @import '../style/shared.css';
    
    .guess-reminder {
        display: flex;
        flex-direction: row;
        gap: 0.2em;
        align-items: center;
    }
    .guess-reminder .guess {
        --l-background-color: var(--v-color-backgroundC);
        text-decoration: line-through;
        padding: 0.5ch;
        background-color: var(--l-background-color);
        border-radius: var(--v-radius-secondary);   
    }
</style>