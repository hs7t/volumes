<script>
    import Dialog from "./components/Dialog.svelte"
    import { gameState, checkStatus, fetchShownHints, resetGame } from "../shared.svelte.js"
    import Button from "./components/Button.svelte"
    
    let gameStatus = $derived(checkStatus(gameState))
    let shown = $derived(gameStatus == 'won' || gameStatus == 'lost')
    let dialogContent = $state({
        title: "",
        message: "",
        stats:  {
            score: gameState.score,
            hintAmount: fetchShownHints().length,
        }
    })

    $effect(() => {
        switch (gameStatus) {
            case 'won':
                dialogContent["title"] = "Woohoo!"
                dialogContent["message"] = "You won!"
                break
            case 'lost':
                dialogContent["title"] = "Good game!"
                dialogContent["message"] = "Ah, you didn't make it this time. It's alright, though."
                dialogContent["hint"] = ("The word was " + gameState.solution)
                break
        }
    })
</script>

{#snippet content()}
    <h2>{dialogContent?.title}</h2>
    <p>
        {dialogContent?.message} Your score was of {dialogContent?.stats?.score}, and you 
        used {dialogContent.stats.hintAmount} snippet{#if (!(dialogContent.stats.hintAmount == 1))}s{:else}{/if}.
    </p>
    <Button action={resetGame} text="Solve again" />
{/snippet}

<Dialog {content} bind:shown={shown}></Dialog>