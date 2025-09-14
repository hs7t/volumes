<script>
    import Button from "./components/Button.svelte"
    import Dialog from "./components/Dialog.svelte"

    let shown = true
    function makeShown(bool) {
        shown = bool;
    }
</script>

{#snippet content()}
    <h2>How to play</h2>
    <p>Guess a hidden word using up to three snippets of text.</p>
    <ul>
        <li>You have five points.</li>
        <li>Showing a snippet or entering a guess costs one point.</li>
        <li>Closer guesses are highlighted in warmer colours.</li>
        <li>You lose when you're out of points. Try not to lose!</li>
    </ul>
    <Button action={() => makeShown(false)} text="Got it!"></Button>
{/snippet}

<Dialog {content} bind:shown={shown}></Dialog>