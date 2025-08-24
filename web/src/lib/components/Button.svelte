<script>
    let { action, text, disabled = false } = $props()
</script>

<button onclick={action} {disabled}>
    {text}
</button>

<style>
    @import '../../style/shared.css';
    
    button {
        width: fit-content;
        max-width: 100%;
        padding: 0.8ch;

        font-family: var(--v-font-secondary);
        font-size: var(--v-size-font-primary);
        background-color: var(--v-color-accent);
        color: var(--v-color-accentContrast);
        border-radius: var(--v-radius-secondary);
        border: var(--v-border-primary);
        border-color: var(--v-color-secondary);

        transition: all 300ms;
    }

    button:active {
        outline: var(--v-border-primary);
        outline-offset: 2pt;
        transform: scale(0.98) rotate(1deg);
        transition: all 100ms;
    }

    button:disabled {
        background-color: var(--v-color-secondary);
        color: var(--v-color-accentContrast);
        border: var(--v-border-primary);
        cursor: not-allowed;
    }

    button:disabled:active {
        outline: var(--v-border-secondary);
        transform: none;
    }
</style>