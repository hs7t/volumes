<script>
  import { hints, fetchShownHints, score } from '../shared.svelte.js'
    import Button from './components/Button.svelte'
    function newSnippet() {
        $score -= 1;
    }

</script>

<div class="card-area">
    <h2>Snippets</h2>
    <div class="snippets">
        {#each hints as hint}
            <figure class="snippet">
                <blockquote>
                    {hint.content.replace(/{.*?}/gm, '[__]')}
                </blockquote>
                <figcaption>
                    From <cite>{hint.source}</cite> {#if hint.by} by {hint.by}{/if} ({hint.date})
                </figcaption>
            </figure>
        {/each}
    </div>
    <Button action={newSnippet} text="Show another snippet ({fetchShownHints(hints).length}/{hints.length})" />
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