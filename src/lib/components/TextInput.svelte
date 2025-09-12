<script>
    import Button from "./Button.svelte";

    let { action = undefined, input = $bindable(), inputLabel = undefined, buttonLabel = "Enter", id = "textInput" } = $props()

    function processEnter(e) {
        if (e.key == "Enter") {
            e.preventDefault()
            action()
        }
    }
</script>

<div class="answer-form">
    <div class="input">
        {#if inputLabel}
        <label for={id}>{inputLabel}</label>
        {/if}
        <input {id} type="text" class="input-box" bind:value={input} onkeyup={processEnter}>
    </div>

    {#if action}
    <Button {action} text={buttonLabel}></Button>
    {/if}
</div>

<style>
    @import '../../style/shared.css';

    .answer-form {
        display: flex;
        flex-direction: column;
        gap: 0.5rem
    }

    .input {
        display: flex;
        flex-direction: column;
    }

    .input-box {
        font-size: var(--v-size-font-primary);
        font-family: var(--v-font-secondary);
        letter-spacing: 0.1ch;
        padding: 0.8ch;

        border: var(--v-border-primary);
        border-radius: var(--v-radius-secondary);
        background-color: var(--v-color-backgroundC);
        color: inherit;
        transition: all 200ms;
    }

    .input-box:hover, .input-box:active, .input-box:focus {
        border: var(--v-border-secondary);
        border-radius: var(--v-radius-secondary);
        transition: all 400ms;
    }

    .input-box:active, .input-box:focus {
        outline: none;
        border: var(--v-border-primary);
        transition: all 400ms;
    }

    label {
        font-family: var(--v-font-secondary);
        color: var(--v-color-secondary);
        margin-bottom: 0.25rem;
    }
</style>