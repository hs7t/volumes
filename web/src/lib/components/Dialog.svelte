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

        border: var(--v-border-primary);
        border-radius: var(--v-radius-primary);
        background-color: var(--v-color-backgroundB);

        animation: 400ms dialogEnter;
    }

    @keyframes dialogEnter {
        0% {
            transform: rotate(-1deg);
        }
        100% {
            transform: none;
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