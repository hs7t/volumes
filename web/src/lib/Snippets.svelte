<script>
    let { snippets } = $props();
</script>

<div>
    <h2>Snippets</h2>
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

        <button>Show another snippet</button>
    </div>
</div>

<style>
    figure {
        font-size: 1.4rem;
        margin: 0;
        padding: 1ch;
    }

    blockquote {
        margin: 0;
    }
    
    figcaption {
        font-size: 1rem;
    }
</style>