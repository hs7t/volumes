<script>
    import { onMount } from "svelte"
    import Button from "./components/Button.svelte"
    let dialogReference

    onMount(() => {
        dialogReference.showModal()
    })

    function closeSplashScreen() {
        dialogReference.close()
    }
</script>

<dialog bind:this={dialogReference} closedby="any">
    <h2>Volumes</h2>
    <ul>
        <li>Find the missing word using up to three snippets of text.</li>
        <li>You have five points.</li>
        <li>Showing a snippet or entering a guess deducts one!</li>
        <li>Try not to lose :P</li>
    </ul>
    <Button action={closeSplashScreen} text="Go!"></Button>
</dialog>

<style>
    @import '../style/shared.css';

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