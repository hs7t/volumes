<script>
    let { snippets } = $props();
</script>

<div>
    <h1>Snippets</h1>
    <div class="snippets">
        {#each snippets as snippet}
            <figure class="snippet">
                <blockquote>
                    {snippet.content.replace(/{.*?}/gm, '[__]')}
                </blockquote>
                <figcaption>
                    From <cite>{snippet.source}</cite>, {snippet.date}
                </figcaption>
            </figure>
        {/each}
    </div>
</div>