<script>
    let { content, shown = $bindable() } = $props()
    let dialogReference
    
    $effect(() => {
        if (shown) {
            dialogReference.showModal()
        } else {
            dialogReference.close()
        }
    })
</script>

<dialog bind:this={dialogReference} closedby="any">
    {@render content()}
</dialog>

<style>
    @import '../../style/shared.css';

    dialog {
        width: clamp(280px, 100%, 560px);
        display: flex;
        flex-direction: column;
        gap: 0.5rem;

        color: inherit;
        font-size: inherit;
        border: var(--v-border-primary);
        border-radius: var(--v-radius-primary);
        background-color: var(--v-color-backgroundB);

        animation: 400ms dialogEnter;
        animation-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
        transition-behavior: allow-discrete;
        transition: all 100ms;
    }

    dialog:focus {
        outline: var(--v-border-secondary);
        outline-offset: 3pt;
        transition: all 200ms;
    }

    @keyframes dialogEnter {
        0% {
            transform: scale(0.98);
            opacity: 0.7;
        }
        100% {
            transform: none;
            opacity: 1;
        }
    }

    dialog::backdrop {
        animation: 600ms backdropEnter forwards;
        background-color: var(--v-color-backgroundA);
        opacity: 0.5;
    }

    @keyframes backdropEnter {
        0% {
            opacity: 1;
        }
        80% {
            opacity: 1;
        }
        100% {
            opacity: 0.5;
        }
    }

    ul {
        max-width: 100%;
        list-style-type: circle;
    }

    dialog:not([open]) {
        display: none;
        transition: all;
    }
</style>