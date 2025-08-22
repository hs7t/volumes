<script>
    import { score } from '../shared.svelte.js'
    import Button from './components/Button.svelte'
    let { snippets } = $props();

    function newSnippet() {
        $score -= 1;
    }
</script>

<div class="card-area">
    <h2>Snippets</h2>
    <div class="snippets">
        {#each snippets as snippet}
            <figure class="snippet">
                <blockquote>
                    {snippet.content.replace(/{.*?}/gm, '[__]')}
                </blockquote>
                <figcaption>
                    From <cite>{snippet.source}</cite> {#if snippet.by} by {snippet.by}{/if} ({snippet.date})
                </figcaption>
            </figure>
        {/each}
    </div>
    <Button action={newSnippet} text="Show another snippet" />
</div>

<style>
    @import '../style/shared.css';

    figure {
        font-size: 1.4rem;
        margin: 0;
        padding: 1ch;
        background-color: var(--v-color-backgroundC);
        border-radius: var(--v-radius-secondary);
        border: var(--v-border-secondary)
    }

    blockquote {
        margin: 0;
    }
    
    figcaption {
        font-family: var(--v-font-secondary);
        font-size: var(--v-size-font-primary);
    }
</style>