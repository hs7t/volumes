<script>
    import { useSound } from "svelte-sound"
    let { action, text, disabled = false, style = "", sound = undefined, id = undefined } = $props()
</script>

<button onclick={action} {disabled} {style} {id} use:sound>
    {text}
</button>

<style>
    @import '../../style/shared.css';
    
    button {
        --l-size-font: var(--v-size-font-primary);

        width: fit-content;
        max-width: 100%;
        padding: 0.8ch;

        font-family: var(--v-font-secondary);
        font-size: var(--l-font-size);
        background-color: var(--v-color-accent);
        color: var(--v-color-accentContrast);
        border-radius: var(--v-radius-secondary);
        border: var(--v-border-primary);
        border-color: var(--v-color-secondary);

        transition: all 250ms;
    }

    button:focus {
        outline: var(--v-border-secondary);
        outline-offset: 3pt;
        transition: all 200ms;
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
        text-decoration: line-through;
        text-decoration-thickness: 0.1rem;
        transition: all 100ms;
    }

    button:disabled:active {
        outline: var(--v-border-secondary);
        transform: none;
    }
</style>