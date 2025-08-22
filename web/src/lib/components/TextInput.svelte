<script>
    import Button from "./Button.svelte";

    let { action = undefined, input = $bindable(), inputLabel = undefined, buttonLabel = "Enter" } = $props()
</script>

<div class="answer-form">
    <div class="input">
        {#if inputLabel}
        <label for="input-box">{inputLabel}</label>
        {/if}
        <input type="text" class="input-box" bind:value={input}>
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
        padding: 0.8ch;

        border: var(--v-border-primary);
        border-radius: var(--v-radius-secondary);
        background-color: var(--v-color-backgroundC);
        color: inherit;
    }

    .input-box:hover, .input-box:active, .input-box:focus {
        transition: all 200ms;
        border: var(--v-border-primaryThick);
    }

    label {
        font-family: var(--v-font-secondary);
        color: var(--v-color-secondary);
        margin-bottom: 0.25rem;
    }
</style>