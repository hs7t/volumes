<script>
    let { action, text } = $props()
</script>

<button onclick={action}>
    {text}
</button>

<style>
    @import '../../style/shared.css';
    
    button {
        width: fit-content;
        max-width: 100%;
        padding: 0.8ch;
        font-family: var(--v-font-secondary);

        background-color: var(--v-color-accent);
        color: var(--v-color-accentContrast);
        border-radius: var(--v-radius-secondary);
        border: none;
    }
</style>