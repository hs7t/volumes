<script>
    import Button from "./Button.svelte";

    let { action = undefined, input = $bindable(), inputLabel = undefined, buttonLabel = "Enter" } = $props()
</script>

<div class="answer-form">
    <div class="input">
        {#if inputLabel}
        <label for="input">{inputLabel}</label>
        {/if}
        <input type="text" id="input" bind:value={input}>
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

    label {
        font-family: var(--v-font-secondary);
        color: var(--v-color-secondary);
        margin-bottom: 0.25rem;
    }
</style>