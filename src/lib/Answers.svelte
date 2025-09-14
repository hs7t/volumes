<script>
    import { processGuess, gameState, normalize } from '../shared.svelte'
    import TextInput from './components/TextInput.svelte'

    import { useSound } from "svelte-sound"

    import clickingSoundAudioFile from "../assets/sfx/type.m4a"
    let clickingSound = useSound(clickingSoundAudioFile, ["click"])

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
    <TextInput bind:input={input} action={processSubmit} inputLabel="Type in a guess..." buttonLabel="This is it!" {clickingSound}></TextInput>

    {#if (gameState.guesses.length > 0)}
        <div class="guess-reminder">
            <p>Your guesses:</p> 
            {#each gameState.guesses as guess}
                {#await guess.findColor()}
                    <span class="guess">{guess.word}</span>
                {:then color}
                    <p class="guess" style="background-color: {color}; color: black;">{guess.word}</p>
                {/await}
            {/each}
        </div>
    {/if}
</div>

<style>
    @import '../style/shared.css';
    
    .guess-reminder {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 0.2em;
        align-items: center;
    }
    .guess-reminder .guess {
        text-decoration: line-through;
        padding: 0.5ch;
        background-color: var(--v-color-backgroundC);
        border-radius: var(--v-radius-secondary);  
        transition: all 200ms; 
        text-box: trim-both alphabetic;
    }
</style>