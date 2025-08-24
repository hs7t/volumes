<script>
    import Button from "./components/Button.svelte"
    import Dialog from "./components/Dialog.svelte"

    let shown = true
    function makeShown(bool) {
        shown = bool;
    }
</script>

{#snippet content()}
    <h2>Volumes</h2>
    <ul>
        <li>Find the missing word using up to three snippets of text.</li>
        <li>You have five points.</li>
        <li>Showing a snippet or entering a guess deducts one!</li>
        <li>Try not to lose :P</li>
    </ul>

    <Button action={() => makeShown(false)} text="Goo!"></Button>
{/snippet}

<Dialog {content} bind:shown={shown}></Dialog>