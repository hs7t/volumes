<script>
    import Dialog from "./components/Dialog.svelte"
    import { gameState, fetchShownHints } from "../shared.svelte"

    let { shown, won } = $props()
    
    let dialogContent = {
        stats:  {
            score: gameState.score,
            hintAmount: fetchShownHints().length,
        }
    }
    switch (won) {
        case true:
            dialogContent.title = "Woohoo!"
            dialogContent.message = "You won!"
            break
        case false:
            dialogContent.title = "Good game!"
            dialogContent.message = "Ah, you didn't make it this time. It's alright, though."
            break
    }
</script>

{#snippet content()}
    <h2>{dialogContent.title}</h2>
    <p>
        {dialogContent.message}. Your score was of {dialogContent.stats.score}, and you 
        used up {dialogContent.stats.hintAmount} snippet
        {#if (!(dialogContent.stats.hintAmount == 1))}s{:else}{/if}.
    </p>
{/snippet}

<Dialog {content} bind:shown={shown}></Dialog>