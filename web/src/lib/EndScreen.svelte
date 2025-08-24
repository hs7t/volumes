<script>
    import Dialog from "./components/Dialog.svelte"

    let { shown, won } = $props()
    let dialogContent = {}
    switch (won) {
        case true:
            dialogContent.title = "Woohoo!"
            dialogContent.message = "You won!"
            break
        case false:
            dialogContent.title = "Good game!"
            dialogContent.message = "Ah, you didn't make it this time. It's alright, though."
    }
</script>

{#snippet content()}
    <h2>Good game!</h2>
{/snippet}

<Dialog {content} bind:shown={shown}></Dialog>