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
    .input {
        display: flex;
        flex-direction: row;
    }
</style>