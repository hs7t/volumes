<script>
    import Button from "./Button.svelte";

    let { action, input = $bindable(), inputLabel = undefined, buttonLabel = "Enter" } = $props()
</script>

<div class="answer-form">
    <div class="input">
        {#if inputLabel}
        <label for="input">{inputLabel}</label>
        {/if}
        <input type="text" id="input" bind:value={input}>
    </div>
    <Button {action} text={buttonLabel}></Button>
</div>

<style>
    .input {
        display: flex;
        flex-direction: row;
    }
</style>