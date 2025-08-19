<script>
    let { snippets } = $props();
</script>

<div>
    <h1>Snippets</h1>
    <div class="snippets">
        {#each snippets as snippet}
        {/each}
    </div>
</div>